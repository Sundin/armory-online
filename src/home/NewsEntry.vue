<template>
  <article class="news-entry">
    <time :datetime="item.date">{{ item.date }}</time>
    <h3>{{ item.heading }}</h3>
    <div class="entry-body" v-html="item.body"></div>
    <div v-if="item.image" class="entry-image">
      <img :src="imageUrl(item.image)" :alt="item.heading" loading="lazy" decoding="async">
    </div>
  </article>
</template>

<script setup>
const images = import.meta.glob('../assets/**/*.{png,jpg,jpeg,gif,webp}', {
  eager: true,
  import: 'default',
  query: '?url',
});

defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const imageUrl = (path) => images[`../${path}`];
</script>

<style scoped>
.news-entry {
  background: rgba(0, 15, 5, 0.78);
  border: 2px ridge rgba(65, 226, 56, 0.62);
  box-shadow: inset 0 0 24px rgba(65, 226, 56, 0.04);
  padding: clamp(1.1rem, 3vw, 2rem);
  position: relative;
}

.news-entry::after {
  color: rgba(65, 226, 56, 0.36);
  content: "END TRANSMISSION";
  font-size: 0.55rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  position: absolute;
  right: 1rem;
  top: 1rem;
}

time {
  color: var(--link-color);
  display: block;
  font: 900 0.68rem/1 var(--body-font);
  letter-spacing: 0.12em;
  margin-bottom: 1rem;
}

h3 {
  margin: 0 0 1rem;
}

.entry-body :deep(p) {
  margin-bottom: 0;
}

.entry-image img {
  border: 1px solid var(--line);
  display: block;
  margin-top: 1.5rem;
  max-height: 620px;
  object-fit: cover;
  width: 100%;
}
</style>
