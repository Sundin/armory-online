<template>
  <div class="comment">
    <h2>{{ item.name }}:</h2>
    <time :datetime="new Date(item.createdAt).toISOString()">{{ new Date(item.createdAt).toLocaleString() }}</time>
    <p>{{ plainTextComment(item.comment) }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
import { plainTextComment } from '../../lib/content';

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
div.comment {
  background-color: #472000;
  color: var(--text-color);
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  border: 2px solid var(--text-color);
  padding: 5px;
  margin: 15px 15px;
  font-family: Georgia, serif;
  outline: none;
  opacity: 0.8;
}

p {
  white-space: pre-wrap;
}
</style>
