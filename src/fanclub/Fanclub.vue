<template>
  <main-layout>
    <h1>Join the Space Marauders!</h1>
    <p>
      The Space Marauders is the official Armory fanclub.
      Membership costs 150 SEK per year and includes an exclusive gift.
      The gift for previous years' fanclub editions have been rare merchandise
      such as special edition t-shirt and patches,
      as well as the highly sought-after "Live in the Abyss" live cassette.
      We have members from all around the galaxy.
    </p>
    <h3>
      <a
        href="https://www.jawbreaker.se/product/space-marauders-membership/"
      >Click here to join the fanclub!</a>
    </h3>

    <p>
      Already a member? <a href="/vault7">Click here to enter the restricted fanclub area.</a>
    </p>

    <p>
      In this image you can see some of the gifts we have sent out
      to our faithful fanclub members during the past years:
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
