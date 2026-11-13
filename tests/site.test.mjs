import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import {
  numberedTransmissions,
  paginate,
  partitionEvents,
  plainTextComment,
  publishedEntries,
} from '../src/lib/content.js';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('the public entry point mounts the Armory app with social preview metadata', async () => {
  const html = await read('index.html');
  assert.match(html, /<title>Armory — Cosmic Speed Metal<\/title>/);
  assert.match(html, /property="og:title" content="Armory — Cosmic Speed Metal"/);
  assert.match(
    html,
    /property="og:image" content="https:\/\/www\.armory\.se\/armory-social-preview-clean\.png"/,
  );
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /<div id="app"><\/div>/);
});

test('content helpers handle dates, pagination, and legacy comment markup safely', () => {
  const entries = [
    { date: '2026-09-24', heading: 'future' },
    { date: '2026-09-22', heading: 'older' },
    { date: '2026-09-23', heading: 'today' },
  ];
  const today = new Date(2026, 8, 23, 23, 30);

  assert.deepEqual(publishedEntries(entries, today).map(({ heading }) => heading), ['today', 'older']);
  assert.deepEqual(
    numberedTransmissions(publishedEntries(entries, today)).map(({ transmissionNumber }) => transmissionNumber),
    ['002', '001'],
  );
  assert.deepEqual(partitionEvents(entries, today).upcoming.map(({ heading }) => heading), ['today', 'future']);
  assert.deepEqual(paginate(entries, 99, 2), { items: [entries[2]], page: 1, pageCount: 2 });
  assert.equal(plainTextComment('hello<br>world<script>alert(1)</script>'), 'hello\nworld');
});

test('the core pages remain registered', async () => {
  const router = await read('src/router.js');
  for (const path of ['/', '/about', '/tour', '/fanclub', '/merch']) {
    assert.match(router, new RegExp(`path:\\s*['"]${path}['"]`), `missing route ${path}`);
  }
  for (const component of ['Home', 'About', 'Tour', 'Fanclub', 'Merch']) {
    assert.match(router, new RegExp(`import ${component} from`), `${component} should load with the main navigation`);
  }
  assert.match(router, /router\.onError/);
  assert.match(router, /window\.location\.assign\(retryPath\)/);
  assert.match(router, /:\s*pathMatch\(\.\*\)\*/);
});

test('news entries have valid required fields and dates', async () => {
  const news = JSON.parse(await read('src/home/news.json'));
  assert.ok(news.length > 0);
  for (const [index, entry] of news.entries()) {
    assert.equal(typeof entry.heading, 'string', `entry ${index} heading`);
    assert.equal(typeof entry.body, 'string', `entry ${index} body`);
    assert.match(entry.date, /^\d{4}-\d{2}-\d{2}$/, `entry ${index} date`);
    assert.ok(!Number.isNaN(Date.parse(`${entry.date}T00:00:00Z`)), `entry ${index} date`);
  }

  assert.equal(news[0].image, 'assets/echoes_of_the_astrolith_flyer.webp');
  assert.equal(news[0].imageDisplay, 'full');
});

test('news pages show six entries and a page status', async () => {
  const home = await read('src/home/Home.vue');
  assert.match(home, /const pageSize = 6;/);
  assert.match(home, /Page \{\{ pageNumber \}\} \/ \{\{ totalPages \}\}/);
});

test('the May 2027 tour schedule includes coordinate placeholders', async () => {
  const tour = await read('src/tour/Tour.vue');
  for (const day of ['01', '02', '03', '04', '05', '06', '08']) {
    assert.match(
      tour,
      new RegExp(
        `date: '2027-05-${day}',\\n    location: 'Planet Earth – Stand by for coordinates'`,
      ),
    );
  }
});

test('each full-length album has a linked detail page', async () => {
  const router = await read('src/router.js');
  const about = await read('src/pages/About.vue');
  const albumData = await read('src/data/albums.js');
  const slugs = [
    'world-peace-cosmic-war',
    'the-search',
    'mercurion',
    'echoes-of-the-astrolith',
  ];

  assert.match(router, /path:\s*['"]\/albums\/:slug['"]/);
  for (const slug of slugs) {
    assert.match(about, new RegExp(`/albums/${slug}`));
    assert.match(albumData, new RegExp(`slug: '${slug}'`));
  }
});

test('album pages prioritize tracks and list only physical editions', async () => {
  const albumPage = await read('src/pages/Album.vue');
  const albumData = await read('src/data/albums.js');

  assert.doesNotMatch(albumPage, /<dt>Tracks<\/dt>/);
  assert.doesNotMatch(albumPage, /Physical transmission/);
  assert.match(albumPage, /<h2>Editions<\/h2>/);
  assert.ok(albumPage.indexOf('<h2>Track list</h2>') < albumPage.indexOf('<h2>Editions</h2>'));
  assert.doesNotMatch(albumPage, /Metal Archives/i);
  assert.doesNotMatch(albumPage, /edition\.source/);
  assert.doesNotMatch(albumData, /Metal-archives\.com/i);
  assert.doesNotMatch(albumData, /name: 'Digital/);
  assert.match(albumData, /Listen carefully to the echoes…/);
  assert.match(albumData, /spaceship Mercurion/);
  assert.match(albumData, /What is more terrifying/);
});

test('press materials provide logo and high-resolution photo downloads', async () => {
  const about = await read('src/pages/About.vue');
  const photos = await read('src/pages/Photos.vue');
  const logos = await read('src/pages/Logos.vue');
  const router = await read('src/router.js');

  assert.match(about, /<router-link to="\/logos">Download Logo<\/router-link>/);
  assert.match(about, /<router-link to="\/photos">Explore Photos<\/router-link>/);
  assert.match(router, /path:\s*['"]\/photos['"]/);
  assert.match(router, /path:\s*['"]\/logos['"]/);
  assert.equal((photos.match(/preview: '\/press-photos\/armory-press-\d\.webp'/g) || []).length, 5);
  assert.equal((photos.match(/Download in High Resolution/g) || []).length, 1);
  assert.equal((photos.match(/drive\.usercontent\.google\.com\/download\?id=/g) || []).length, 5);
  assert.ok(photos.indexOf('armory-press-5.webp') < photos.indexOf('armory-press-1.webp'));
  assert.equal((photos.match(/Linni Lindström \/ Turborock Productions/g) || []).length, 4);
  assert.equal((photos.match(/Bengt Lövgren/g) || []).length, 1);
  assert.match(photos, /<span>Photo Credit: \{\{ photo\.credit \}\}<\/span>/);
  assert.equal((logos.match(/preview: '\/logo-previews\/[^']+-green\.webp'/g) || []).length, 3);
  assert.equal((logos.match(/png: '\/downloads\/logos\/[^']+\.png'/g) || []).length, 3);
  assert.equal((logos.match(/ai: '\/downloads\/logos\/[^']+\.ai'/g) || []).length, 3);
  assert.match(logos, /Download Complete Logo Pack/);
});

test('footer aligns the command and history markers', async () => {
  const layout = await read('src/layouts/Main.vue');

  assert.match(layout, />Cosmic Speed Metal<\/span>/);
  assert.match(layout, /site-footer__marker[^>]*aria-hidden="true">★<\/span>/);
  assert.match(layout, /site-footer__history site-footer__marker[^>]*aria-hidden="true">•<\/span>/);
  assert.match(layout, /grid-template-columns: minmax\(0, 1fr\) auto minmax\(0, 1fr\)/);
});
