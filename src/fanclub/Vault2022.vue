<template>
  <div class="vault-2022">
    <h2>2022</h2>
    <p>
      We need to clear our some space in our cargo holds.
      Help us out by ordering some merch! Use the promo code OUMUAMUA
      to get a 20% discount on all pre-Mercurion era merch from
      <a href="https://www.jawbreaker.se/product-tag/armory/">jawbreaker.se</a>
    </p>
    <p>Also check out our brand new music video:</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Uw76Hz1XCz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>Stay tuned for updates...</p>
    <p>ARMORY 2022</p>
    <CommentsSection pageId="fanclub2022" />
  </div>
</template>

<script>
import CommentsSection from './commentsView/CommentsSection.vue';

export default {
  components: {
    CommentsSection,
  },
  name: 'Vault2022',
};
</script>

<style scoped>
input {
  background-color: #000000;
  color: var(--text-color);
  font-size: 21px;
  text-align: center;
  border: 2px solid var(--text-color);
  outline: none;
}

.wrongPassword {
  border: 2px solid #ff0000;
  animation-name: blinker;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-delay: infinite;
  animation-iteration-count: 3;
  animation-direction: alternate;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

button {
  background-color: #410000;
  color: var(--text-color);
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  border: 2px solid var(--text-color);
  padding: 5px 15px;
  font-family: Georgia, serif;
  cursor: pointer;
  outline: none;
  opacity: 0.8;
  transition: 0.3s;
}

button:hover {
  opacity: 1;
}
</style>
