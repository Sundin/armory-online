<template>
  <main-layout>
    <section class="transmission-header">
      <p class="kicker">Incoming transmissions // Sol system</p>
      <h1>Armory News <a href="/feed.xml" aria-label="Armory news RSS feed"><img alt="" class="rss" src="../assets/rss.png"></a></h1>
      <p class="status"><span aria-hidden="true"></span> Receiver locked · Archive online</p>
    </section>
    <div class="news-grid">
      <news-entry v-for="item in newsEntries" :key="item.date" :item="item"></news-entry>
    </div>
    <nav class="pagination" aria-label="News pages">
      <button v-if="currentPage !== numberOfPages" @click="olderNews">
      Older news
      </button>
      <button v-if="currentPage !== 0" @click="newerNews">
      Newer news
      </button>
    </nav>
  </main-layout>
</template>

<script setup>
import { computed, ref } from 'vue';
import MainLayout from '../layouts/Main.vue';
import NewsEntry from './NewsEntry.vue';
import news from './news.json';
import { paginate, publishedEntries } from '../lib/content';

const pageSize = 4;
const currentPage = ref(0);

const entries = publishedEntries(news);
const page = computed(() => paginate(entries, currentPage.value, pageSize));
const numberOfPages = computed(() => page.value.pageCount - 1);
const newsEntries = computed(() => page.value.items);

const olderNews = () => {
  currentPage.value = Math.min(currentPage.value + 1, numberOfPages.value);
};

const newerNews = () => {
  currentPage.value = Math.max(currentPage.value - 1, 0);
};
</script>

<style scoped>
.transmission-header {
  border-bottom: 3px double var(--line);
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  text-align: center;
}

.kicker,
.status {
  font-size: 0.66rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.kicker {
  color: var(--link-color);
}

.status span {
  animation: pulse 1.2s steps(2) infinite;
  background: var(--text-color);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--text-color);
  display: inline-block;
  height: 0.55rem;
  margin-right: 0.35rem;
  width: 0.55rem;
}

.rss {
  width: 0.5em;
}

.news-grid {
  display: grid;
  gap: 1rem;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

@keyframes pulse {
  50% { opacity: 0.25; }
}

@media (prefers-reduced-motion: reduce) {
  .status span { animation: none; }
}
</style>
