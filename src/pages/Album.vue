<template>
  <main-layout>
    <article v-if="album" class="album-page">
      <router-link class="back-link" to="/about">← Album discography</router-link>

      <header class="album-hero">
        <div class="artwork-frame">
          <img :src="album.artwork" :alt="album.artworkAlt" />
        </div>

        <div class="album-intro">
          <p class="eyebrow">Full-length transmission · {{ album.year }}</p>
          <h1>{{ album.title }}</h1>
          <p class="summary">{{ album.summary }}</p>

          <dl class="release-data">
            <div>
              <dt>Released</dt>
              <dd>{{ album.released }}</dd>
            </div>
            <div>
              <dt>Label</dt>
              <dd>{{ album.label }}</dd>
            </div>
          </dl>

          <a class="signal-link" :href="album.bandcamp">Listen / buy on Bandcamp ↗</a>
        </div>
      </header>

      <section class="track-section">
        <div class="section-heading">
          <p class="eyebrow">Signal sequence</p>
          <h2>Track list</h2>
        </div>
        <ol class="track-list">
          <li v-for="([title, duration], index) in album.tracks" :key="title">
            <span class="track-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="track-title">{{ title }}</span>
            <span class="track-duration">{{ duration }}</span>
          </li>
        </ol>
      </section>

      <section class="edition-section">
        <div class="section-heading">
          <p class="eyebrow">Known manifestations</p>
          <h2>Editions</h2>
        </div>
        <ul class="edition-list">
          <li v-for="edition in album.editions" :key="edition.name">
            <div>
              <strong>{{ edition.name }}</strong>
              <span>{{ edition.label }}<template v-if="edition.catalog"> · {{ edition.catalog }}</template></span>
            </div>
            <p>{{ edition.notes }}</p>
          </li>
        </ul>
      </section>

      <nav class="album-navigation" aria-label="Other Armory albums">
        <p class="eyebrow">Continue through the archive</p>
        <div class="album-links">
          <router-link
            v-for="item in albums"
            :key="item.slug"
            :class="{ current: item.slug === album.slug }"
            :to="`/albums/${item.slug}`"
          >
            <span>{{ item.year }}</span>
            {{ item.title }}
          </router-link>
        </div>
      </nav>
    </article>

    <section v-else class="missing-album">
      <p class="eyebrow">Transmission lost</p>
      <h1>Album not found</h1>
      <router-link to="/about">Return to the discography</router-link>
    </section>
  </main-layout>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { albumBySlug, albums } from '../data/albums';
import MainLayout from '../layouts/Main.vue';

const route = useRoute();
const album = computed(() => albumBySlug(route.params.slug));
</script>

<style scoped>
.album-page {
  --album-line: rgba(196, 255, 129, 0.32);
}

.back-link {
  display: inline-block;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.album-hero {
  align-items: start;
  display: grid;
  gap: clamp(1.75rem, 5vw, 4rem);
  grid-template-columns: minmax(240px, 0.86fr) minmax(0, 1.14fr);
}

.artwork-frame {
  background: #020503;
  border: 1px solid var(--album-line);
  box-shadow: 0 0 0 5px #000, 0 0 0 6px rgba(255, 90, 24, 0.4), 18px 18px 0 rgba(65, 226, 56, 0.07);
  padding: 0.55rem;
  position: relative;
}

.artwork-frame::after {
  border: 1px dashed rgba(196, 255, 129, 0.2);
  content: '';
  inset: -0.85rem;
  pointer-events: none;
  position: absolute;
}

.artwork-frame img {
  aspect-ratio: 1;
  display: block;
  object-fit: cover;
  width: 100%;
}

.eyebrow {
  color: var(--link-color);
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  margin: 0 0 0.75rem;
  text-transform: uppercase;
}

.album-intro h1,
.section-heading h2,
.missing-album h1 {
  margin: 0;
}

.album-intro h1 {
  font-size: clamp(2.55rem, 7vw, 5.3rem);
  overflow-wrap: anywhere;
}

.summary {
  color: #9ef081;
  margin: 1.4rem 0 1.7rem;
}

.release-data {
  border-bottom: 1px solid var(--album-line);
  border-top: 1px solid var(--album-line);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 0 1.5rem;
}

.release-data div {
  border-right: 1px solid var(--album-line);
  padding: 0.8rem 0.85rem 0.85rem 0;
}

.release-data div + div {
  padding-left: 0.85rem;
}

.release-data div:nth-child(2) {
  border-right: 0;
}

.release-data dt {
  color: rgba(196, 255, 129, 0.58);
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.release-data dd {
  font-size: 0.88rem;
  font-weight: 800;
  margin: 0.25rem 0 0;
}

.signal-link {
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.edition-section,
.track-section {
  border-top: 1px dashed var(--album-line);
  display: grid;
  gap: clamp(1.5rem, 5vw, 4rem);
  grid-template-columns: minmax(170px, 0.62fr) minmax(0, 1.38fr);
  margin-top: clamp(3rem, 8vw, 6rem);
  padding-top: clamp(2rem, 5vw, 3.5rem);
}

.edition-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.edition-list li {
  border-bottom: 1px solid rgba(65, 226, 56, 0.2);
  display: grid;
  gap: 0.4rem;
  padding: 0.85rem 0;
}

.edition-list li:first-child {
  border-top: 1px solid rgba(65, 226, 56, 0.2);
}

.edition-list strong,
.edition-list span {
  display: block;
}

.edition-list strong {
  color: var(--text-bright);
}

.edition-list span,
.edition-list p {
  font-size: 0.72rem;
}

.edition-list span {
  color: rgba(196, 255, 129, 0.55);
  margin-top: 0.2rem;
}

.edition-list p {
  margin: 0;
}

.section-heading h2 {
  font-size: clamp(2rem, 5vw, 3.4rem);
}

.track-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.track-list li {
  align-items: baseline;
  border-bottom: 1px solid rgba(65, 226, 56, 0.2);
  display: grid;
  gap: 0.85rem;
  grid-template-columns: 2rem minmax(0, 1fr) max-content;
  padding: 0.65rem 0;
}

.track-list li:first-child {
  border-top: 1px solid rgba(65, 226, 56, 0.2);
}

.track-number,
.track-duration {
  color: rgba(196, 255, 129, 0.55);
  font-size: 0.66rem;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.track-title {
  color: var(--text-bright);
  font-weight: 800;
}

.album-navigation {
  border-top: 1px dashed var(--album-line);
  margin-top: clamp(3rem, 8vw, 6rem);
  padding-top: 2rem;
}

.album-links {
  display: grid;
  gap: 0.65rem;
  grid-template-columns: repeat(4, 1fr);
}

.album-links a {
  background: rgba(0, 16, 7, 0.72);
  border: 1px solid rgba(65, 226, 56, 0.28);
  font-size: 0.78rem;
  min-height: 5.4rem;
  padding: 0.9rem;
  text-decoration: none;
}

.album-links a:hover,
.album-links a.current {
  border-color: var(--link-color);
  transform: translateY(-2px);
}

.album-links a.current {
  box-shadow: inset 3px 0 0 var(--link-color);
  color: var(--text-bright);
}

.album-links span {
  color: rgba(196, 255, 129, 0.5);
  display: block;
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  margin-bottom: 0.45rem;
}

.missing-album {
  text-align: center;
}

@media screen and (max-width: 760px) {
  .album-hero,
  .edition-section,
  .track-section {
    grid-template-columns: 1fr;
  }

  .artwork-frame {
    margin: 0 auto;
    max-width: 34rem;
  }

  .album-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 480px) {
  .release-data {
    grid-template-columns: 1fr;
  }

  .release-data div,
  .release-data div + div {
    border-bottom: 1px solid var(--album-line);
    border-right: 0;
    padding-left: 0;
  }

  .release-data div:nth-child(2) {
    border-bottom: 0;
  }

  .edition-list li {
    grid-template-columns: 1fr;
  }

  .edition-list p,
  .edition-list a {
    grid-column: 1;
  }

  .album-links {
    grid-template-columns: 1fr;
  }
}
</style>
