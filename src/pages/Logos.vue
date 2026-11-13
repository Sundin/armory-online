<template>
  <main-layout>
    <header class="logos-header">
      <p class="eyebrow">Visual archive // insignia access</p>
      <h1>Armory Logos</h1>
      <p>
        Official Armory marks for press and promotional use. Choose a ready-to-use PNG or the
        original Adobe Illustrator artwork.
      </p>
    </header>

    <section class="logo-list" aria-label="Official Armory logos">
      <article v-for="logo in logos" :key="logo.preview" class="logo-card">
        <div class="logo-preview">
          <img :src="logo.preview" :alt="logo.alt" decoding="async" />
        </div>

        <div class="logo-details">
          <h2>{{ logo.name }}</h2>
          <div class="download-links">
            <a :href="logo.png" download>Download PNG</a>
            <span aria-hidden="true">•</span>
            <a :href="logo.ai" download>Download AI</a>
          </div>
        </div>
      </article>
    </section>

    <p class="complete-pack">
      <a href="/downloads/armory-logos.zip" download>Download Complete Logo Pack</a>
    </p>
  </main-layout>
</template>

<script setup>
import MainLayout from '../layouts/Main.vue';

const logos = [
  {
    name: 'Primary Logo',
    preview: '/logo-previews/armory-primary-logo-green.webp',
    alt: 'Primary Armory logo in green',
    png: '/downloads/logos/armory-primary-logo-black.png',
    ai: '/downloads/logos/armory-primary-logo-black.ai',
  },
  {
    name: 'Thin Logo',
    preview: '/logo-previews/armory-thin-logo-green.webp',
    alt: 'Thin Armory logo in green',
    png: '/downloads/logos/armory-thin-logo-black.png',
    ai: '/downloads/logos/armory-thin-logo-black.ai',
  },
  {
    name: 'Inverted Logo',
    preview: '/logo-previews/armory-inverted-logo-green.webp',
    alt: 'Inverted Armory logo in green',
    png: '/downloads/logos/armory-inverted-logo-black.png',
    ai: '/downloads/logos/armory-inverted-logo-black.ai',
  },
];
</script>

<style scoped>
.logos-header {
  margin-bottom: clamp(2.5rem, 7vw, 4.5rem);
}

.logos-header h1 {
  margin-bottom: 0.75rem;
}

.logos-header p:last-child {
  max-width: 44rem;
}

.eyebrow {
  color: var(--link-color);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  margin: 0 0 0.8rem;
  text-transform: uppercase;
}

.logo-list {
  display: grid;
  gap: clamp(2.5rem, 7vw, 4.5rem);
}

.logo-card {
  margin: 0;
}

.logo-preview {
  align-items: center;
  background:
    linear-gradient(rgba(65, 226, 56, 0.04), rgba(65, 226, 56, 0.01)),
    repeating-linear-gradient(0deg, transparent 0 7px, rgba(65, 226, 56, 0.035) 7px 8px),
    #010503;
  border: 1px solid rgba(65, 226, 56, 0.48);
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.72), 0 0 28px rgba(65, 226, 56, 0.13);
  display: flex;
  justify-content: center;
  min-height: clamp(190px, 36vw, 330px);
  overflow: hidden;
  padding: clamp(1.5rem, 6vw, 4rem);
  position: relative;
}

.logo-preview::after {
  border: 1px dashed rgba(65, 226, 56, 0.18);
  content: '';
  inset: 0.65rem;
  pointer-events: none;
  position: absolute;
}

.logo-preview img {
  display: block;
  filter: drop-shadow(0 0 12px rgba(65, 226, 56, 0.32));
  max-height: 250px;
  object-fit: contain;
  transition: filter 180ms ease, transform 180ms ease;
  width: 100%;
}

.logo-card:hover .logo-preview img {
  filter: drop-shadow(0 0 19px rgba(65, 226, 56, 0.56));
  transform: scale(1.018);
}

.logo-details {
  margin-top: 1.25rem;
  text-align: center;
}

.logo-details h2 {
  font-size: clamp(1.45rem, 4vw, 2.15rem);
  margin: 0 0 0.7rem;
}

.download-links {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  justify-content: center;
}

.download-links span {
  color: var(--text-bright);
}

.complete-pack {
  border-top: 1px dashed var(--line);
  margin: clamp(3rem, 8vw, 5rem) 0 0;
  padding-top: 1.5rem;
  text-align: center;
}
</style>
