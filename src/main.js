import Vue from 'vue';

import routes from './routes';
import NotFound from './pages/NotFound.vue';

import { logEvent, endSession } from './analytics';

Vue.config.productionTip = false;

const iOS = false;


const vm = new Vue({
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      logEvent('change page event', { page: this.currentRoute });
      return routes[this.currentRoute] || NotFound;
    },
  },
  render(h) { return h(this.ViewComponent); },
});

vm.$mount('#app');


// listen for all the exit events
window.addEventListener('pagehide', endSession);
window.addEventListener('beforeunload', endSession);
window.addEventListener('unload', endSession);
// for iOS when the focus leaves the tab
if (iOS) window.addEventListener('blur', endSession);
