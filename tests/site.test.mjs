import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { paginate, partitionEvents, plainTextComment, publishedEntries } from '../src/lib/content.js';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('the public entry point mounts the Armory app', async () => {
  const html = await read('index.html');
  assert.match(html, /<title>Armory<\/title>/);
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
  assert.deepEqual(partitionEvents(entries, today).upcoming.map(({ heading }) => heading), ['today', 'future']);
  assert.deepEqual(paginate(entries, 99, 2), { items: [entries[2]], page: 1, pageCount: 2 });
  assert.equal(plainTextComment('hello<br>world<script>alert(1)</script>'), 'hello\nworld');
});

test('the core pages remain registered', async () => {
  const router = await read('src/router.js');
  for (const path of ['/', '/about', '/tour', '/fanclub', '/merch']) {
    assert.match(router, new RegExp(`path:\\s*['"]${path}['"]`), `missing route ${path}`);
  }
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
});
