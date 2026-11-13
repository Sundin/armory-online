<template>
  <main-layout>
    <header class="photos-header">
      <p class="eyebrow">Visual archive // press access</p>
      <h1>Press Photos</h1>
      <p>Selected Armory press photos. Use the link beneath each image for the original file.</p>
    </header>

    <section class="photo-list" aria-label="Armory press photos">
      <figure v-for="photo in photos" :key="photo.preview">
        <img :src="photo.preview" :alt="photo.alt" loading="lazy" decoding="async" />
        <figcaption>
          <span>Photo Credit: {{ photo.credit }}</span>
          <a :href="photo.download">Download in High Resolution</a>
        </figcaption>
      </figure>
    </section>
  </main-layout>
</template>

<script setup>
import MainLayout from '../layouts/Main.vue';

const photos = [
  {
    preview: '/press-photos/armory-press-5.webp',
    alt: 'Armory portrait in red and green smoke',
    credit: 'Bengt Lövgren',
    download:
      'https://drive.usercontent.google.com/download?id=1BDTwVX_de55pdpK__qXwz8kTy_K2_4zo&export=download&confirm=t',
  },
  {
    preview: '/press-photos/armory-press-4.webp',
    alt: 'Armory illuminated by red light at night',
    credit: 'Linni Lindström / Turborock Productions',
    download:
      'https://drive.usercontent.google.com/download?id=1RzW-TIPKWb5vObfQa3v0Ygf2uz5p2pBD&export=download&confirm=t',
  },
  {
    preview: '/press-photos/armory-press-3.webp',
    alt: 'Armory gathered at night with smoke and backlighting',
    credit: 'Linni Lindström / Turborock Productions',
    download:
      'https://drive.usercontent.google.com/download?id=1rXSFvWjmcHZml4XPPmYumieE2MhwJrNr&export=download&confirm=t',
  },
  {
    preview: '/press-photos/armory-press-2.webp',
    alt: 'Armory standing against a dark teal sky',
    credit: 'Linni Lindström / Turborock Productions',
    download:
      'https://drive.usercontent.google.com/download?id=1XTZ6UqxfWxAbJgMBJnqo5nbkR0V7EZTX&export=download&confirm=t',
  },
  {
    preview: '/press-photos/armory-press-1.webp',
    alt: 'Armory standing on a rocky shore beneath storm clouds',
    credit: 'Linni Lindström / Turborock Productions',
    download:
      'https://drive.usercontent.google.com/download?id=1HgEMnyoAJlO6tH5vqF9-pus2VXX_oeWf&export=download&confirm=t',
  },
];
</script>

<style scoped>
.photos-header {
  margin-bottom: clamp(2.5rem, 7vw, 4.5rem);
}

.photos-header h1 {
  margin-bottom: 0.75rem;
}

.photos-header p:last-child {
  max-width: 42rem;
}

.eyebrow {
  color: var(--link-color);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  margin: 0 0 0.8rem;
  text-transform: uppercase;
}

.photo-list {
  display: grid;
  gap: clamp(3rem, 8vw, 5rem);
}

figure {
  margin: 0;
}

img {
  border: 1px solid rgba(65, 226, 56, 0.45);
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.72), 0 0 28px rgba(65, 226, 56, 0.12);
  display: block;
  margin: 0 auto;
  max-width: 760px;
  width: 100%;
}

figcaption {
  display: grid;
  gap: 0.4rem;
  margin-top: 1.1rem;
  text-align: center;
}

figcaption span {
  color: rgba(196, 255, 129, 0.7);
  font-size: 0.72rem;
}
</style>
