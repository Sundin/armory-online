<template>
  <main-layout>
    <h1>Space Marauders FC</h1>

    <div class="fanclub-signal">
      <img
        src="../assets/fanclub_signal.png"
        alt="Distorted green Space Marauders transmission"
        width="320"
        height="180"
      />
    </div>

    <p>
      <a href="/vault7">Click here to enter the restricted fanclub area.</a>
    </p>
    <p>The Space Marauders was the now disbanded Armory fanclub.</p>

    <p>
      Each year a unique gift was distributed to all the fanclub members, such as special edition
      t-shirt and patches, and of course the now highly sought-after "Live in the Abyss" live
      cassette. In this image you can see some of the gifts we have sent out to our faithful fanclub
      members over the years:
    </p>
    <a href="https://www.jawbreaker.se/product/space-marauders-membership/">
      <img src="../assets/fanclub_merch.jpg" />
    </a>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';

export default {
  components: {
    MainLayout,
  },
};
</script>

<style scoped>
.fanclub-signal {
  background: #000;
  border: 1px solid rgba(65, 226, 56, 0.48);
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.72), 0 0 28px rgba(65, 226, 56, 0.16);
  margin: 0 auto 2rem;
  max-width: 640px;
  overflow: hidden;
}

.fanclub-signal img {
  display: block;
  height: auto;
  image-rendering: pixelated;
  width: 100%;
}
</style>
