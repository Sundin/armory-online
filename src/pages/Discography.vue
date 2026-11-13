<template>
  <main-layout>
    <header class="discography-header">
      <router-link class="back-link" to="/about">← Back to About</router-link>
      <p class="eyebrow">Recorded transmissions // 2013–2026</p>
      <h1>Discography</h1>
      <p>Four full-length transmissions and further signals from the Armory archive.</p>
    </header>

    <section class="album-grid" aria-label="Armory full-length albums">
      <router-link
        v-for="album in albums"
        :key="album.slug"
        class="album-card"
        :to="`/albums/${album.slug}`"
      >
        <figure>
          <div class="artwork-frame">
            <img :src="album.artwork" :alt="album.artworkAlt" loading="lazy" decoding="async" />
          </div>
          <figcaption>
            <span>{{ album.year }}</span>
            <strong>{{ album.title }}</strong>
          </figcaption>
        </figure>
      </router-link>
    </section>

    <section class="additional-discography">
      <p class="eyebrow">Further signals</p>
      <h2>Additional Discography</h2>
      <ul>
        <li>
          <time datetime="2013">2013</time>
          <div><strong>Open Fire!</strong><span>Demo</span></div>
        </li>
        <li>
          <time datetime="2015">2015</time>
          <div><strong>S.M.I.</strong><span>Demo</span></div>
        </li>
        <li>
          <time datetime="2016">2016</time>
          <div>
            <strong>Critical Mass Vol. 3</strong>
            <span>Compilation appearance with “High Speed Death”</span>
          </div>
        </li>
        <li>
          <time datetime="2018">2018</time>
          <div>
            <strong>Live in the Abyss</strong>
            <span><router-link to="/fanclub">Fanclub</router-link>-only live cassette</span>
          </div>
        </li>
        <li>
          <time datetime="2025">2025</time>
          <div><strong>Black Star</strong><span>7&quot; single</span></div>
        </li>
      </ul>
    </section>
  </main-layout>
</template>

<script setup>
import { albums } from '../data/albums';
import MainLayout from '../layouts/Main.vue';
</script>

<style scoped>
.discography-header {
  margin-bottom: clamp(2.5rem, 7vw, 4.5rem);
}

.back-link {
  display: inline-block;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 1.4rem;
  opacity: 0.82;
  text-transform: uppercase;
}

.back-link:hover,
.back-link:focus-visible {
  opacity: 1;
}

.discography-header h1 {
  margin: 0 0 0.75rem;
}

.discography-header p:last-child {
  max-width: 42rem;
}

.eyebrow {
  color: var(--link-color);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  margin: 0 0 0.75rem;
  text-transform: uppercase;
}

.album-grid {
  display: grid;
  gap: clamp(2rem, 5vw, 3.5rem);
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.album-card {
  color: inherit;
  text-decoration: none;
}

.album-card figure {
  margin: 0;
}

.artwork-frame {
  background: #020503;
  border: 1px solid rgba(65, 226, 56, 0.45);
  box-shadow: 0 0 0 5px #000, 0 0 0 6px rgba(255, 90, 24, 0.35), 16px 16px 0 rgba(65, 226, 56, 0.07);
  overflow: hidden;
  padding: 0.5rem;
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.album-card:hover .artwork-frame,
.album-card:focus-visible .artwork-frame {
  border-color: var(--link-color);
  box-shadow: 0 0 0 5px #000, 0 0 0 6px rgba(255, 90, 24, 0.65), 20px 20px 0 rgba(65, 226, 56, 0.1);
  transform: translateY(-4px);
}

.artwork-frame img {
  aspect-ratio: 1;
  display: block;
  object-fit: cover;
  width: 100%;
}

figcaption {
  display: grid;
  gap: 0.2rem;
  padding: 1.15rem 0.4rem 0;
}

figcaption span {
  color: rgba(196, 255, 129, 0.58);
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.13em;
}

figcaption strong {
  color: var(--text-bright);
  font-size: clamp(1.15rem, 3vw, 1.7rem);
  line-height: 1.15;
}

.additional-discography {
  border-top: 1px dashed rgba(196, 255, 129, 0.32);
  margin-top: clamp(4rem, 10vw, 7rem);
  padding-top: clamp(2.25rem, 5vw, 3.5rem);
}

.additional-discography h2 {
  font-size: clamp(2rem, 5vw, 3.4rem);
  margin: 0 0 1.5rem;
}

.additional-discography ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.additional-discography li {
  border-bottom: 1px solid rgba(65, 226, 56, 0.2);
  display: grid;
  gap: 1rem;
  grid-template-columns: 4rem minmax(0, 1fr);
  padding: 0.9rem 0;
}

.additional-discography li:first-child {
  border-top: 1px solid rgba(65, 226, 56, 0.2);
}

.additional-discography time {
  color: var(--link-color);
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.additional-discography strong,
.additional-discography span {
  display: block;
}

.additional-discography strong {
  color: var(--text-bright);
}

.additional-discography span {
  color: rgba(196, 255, 129, 0.68);
  font-size: 0.75rem;
  margin-top: 0.2rem;
}

@media screen and (max-width: 640px) {
  .album-grid {
    grid-template-columns: 1fr;
  }
}
</style>
