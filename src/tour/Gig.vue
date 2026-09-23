<template>
  <article class="gig-entry">
    <p v-bind:class="{ cancelled: item.cancelled }">
      <time :datetime="item.date">{{ item.date }}</time>
      <span class="gig-details">
      <template v-if="item.link">
        <a :href="item.link">{{ item.venue }}</a>,
        {{ item.location }}
      </template>
      <template v-else>{{ item.location }}</template>
      <template v-if="item.comment"> ({{ item.comment }})</template>
      <template v-if="showTickets">
        –
        <a :href="item.tickets">Tickets</a>.
      </template>
      </span>
    </p>
  </article>
</template>

<script>
export default {
  name: 'GigEntry',
  props: {
    item: Object,
    pastgig: Boolean,
  },
  computed: {
    showTickets() {
      return !this.pastgig && this.item.tickets;
    },
  },
};
</script>

<style scoped>
.gig-entry {
  border-bottom: 1px dashed var(--line);
}

.gig-entry p {
  align-items: baseline;
  display: grid;
  gap: 1rem;
  grid-template-columns: 7.5rem 1fr;
  margin: 0;
  padding: 0.9rem 0;
}

time {
  color: var(--link-color);
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.cancelled {
  text-decoration: line-through;
}

@media screen and (max-width: 560px) {
  .gig-entry p {
    gap: 0.2rem;
    grid-template-columns: 1fr;
  }
}
</style>
