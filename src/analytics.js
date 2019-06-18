// Based on https://www.pcmaffey.com/roll-your-own-analytics

const SESSION_DATA = [];
const dev = true;
const iOS = false;
const FUNCTION_URL = 'http://localhost:8090/logEvents';

let skip;
// call this function on exit
export const endSession = () => {
  // skip if the function has already been called
  if (skip) return;
  skip = true;

  // I also add an "end session" event to the data here
  const data = SESSION_DATA;
  const url = FUNCTION_URL;

  const { vendor } = window.navigator;

  // https://bugs.webkit.org/show_bug.cgi?id=188329
  // Safari bug is fixed but not yet released. When that happens, will need to check safari version also
  if (window.navigator.sendBeacon && !~vendor.indexOf('Apple')) {
    console.log('try to send the beacon');
    const blob = new Blob([JSON.stringify(data)], { type: 'text/plain; charset=UTF-8' });
    const beacon = window.navigator.sendBeacon('http://localhost:8090/logEventsRaw', blob);
    if (beacon) {
      console.log('Successfully sent beacon');
      return;
    }
  }
  // if it failed to queue, (some adblockers will block all beacons), then try the other way
  console.log('beacon failed');

  // Instead, send an async request
  // Except for iOS :(
  const async = !iOS;
  const request = new XMLHttpRequest();
  request.open('POST', url, async); // 'false' makes the request synchronous
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(data));

  // Synchronous request cause a slight delay in UX as the browser waits for the response
  // I've found it more performant to do an async call and use the following hack to keep the loop open while waiting

  // Chrome doesn't care about waiting
  if (!async || ~vendor.indexOf('Google')) return;

  // Latency calculated from navigator.performance
  const latency = data.latency || 0;
  const t = Date.now() + Math.max(300, latency + 200);
  while (Date.now() < t) {
    // postpone the JS loop for 300ms so that the request can complete
    // a hack necessary for Firefox and Safari refresh / back button
  }
};

export function logEvent(name, properties = {}) {
  const event = {
    event: name,
    timestamp: new Date().toISOString(),
    properties: properties.page,
  };

  SESSION_DATA.push(event);

  // log to console in DEVELOPMENT
  if (dev) {
    console.log(JSON.stringify(event));
  }
}
