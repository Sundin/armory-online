<template>
  <header class="header">
    <div class="signal" aria-hidden="true"><span></span> Interstellar signal online <span></span></div>
    <v-link class="brand" href="/" aria-label="Armory home">
      <img alt="Armory logo" class="logo" src="../assets/logo.png">
    </v-link>
    <nav class="navbar" aria-label="Main navigation">
      <v-link href="/">Home</v-link>
      <v-link href="/tour">Tour</v-link>
      <v-link href="/merch">Merch</v-link>
      <v-link href="/fanclub">Fanclub</v-link>
      <v-link href="/about">About</v-link>
    </nav>
  </header>
</template>

<script>
import VLink from './VLink.vue';

export default {
  name: 'SiteHeader',
  components: {
    VLink,
  },
};
</script>

<style scoped>
.header {
  background: rgba(0, 0, 0, 0.74);
  border-bottom: 1px solid var(--line);
  padding: 0 1rem 1rem;
  text-align: center;
}

.signal {
  align-items: center;
  color: rgba(151, 255, 140, 0.68);
  display: flex;
  font-size: 0.58rem;
  font-weight: 900;
  gap: 0.8rem;
  justify-content: center;
  letter-spacing: 0.18em;
  padding-top: 0.6rem;
  text-transform: uppercase;
}

.signal span {
  background: currentColor;
  height: 1px;
  width: min(12vw, 90px);
}

.brand {
  display: inline-block;
  line-height: 0;
}

.navbar {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.75rem, 3vw, 2rem);
  justify-content: center;
}

.logo {
  display: block;
  margin: clamp(0.5rem, 2vw, 1.25rem) auto;
  max-height: 210px;
  max-width: min(90vw, 520px);
  object-fit: contain;
}

.navbar :deep(a) {
  color: var(--text-color);
  border: 1px solid transparent;
  font-family: var(--display-font);
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 400;
  letter-spacing: 0.045em;
  padding: 0.35rem 0.55rem;
  text-decoration: none;
  text-transform: uppercase;
}

.navbar :deep(a.active) {
  background: var(--link-color);
  border-color: white;
  box-shadow: 3px 3px 0 #6b1e00;
  color: #080000;
  text-shadow: none;
}

.navbar :deep(a:hover) {
  color: var(--link-color);
  text-shadow: 0 0 10px var(--link-color);
}

@media screen and (max-width: 540px) {
  .navbar {
    display: grid;
    gap: 0.3rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .navbar :deep(a) {
    font-size: 1rem;
  }
}
</style>
