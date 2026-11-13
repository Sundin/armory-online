<template>
  <main-layout>
    <h1>About Armory</h1>
    <p>Cosmic Speed Metal from Gothenburg, Sweden (Earth).</p>
    <p>Contact: armoryofficial@gmail.com</p>

    <p>
      Out of the deep void in the far corners of the universe, the entity known as Armory has been
      delivering cosmic speed metal across the solar system since 2012. Based out of Gothenburg,
      Earth, the five warrior-musicians are currently on the warpath following the deployment of
      the fourth full-length album <span class="title">“Echoes of the Astrolith”</span> (released by
      Dying Victims Productions in October 2026), the first to feature new turbo-laser vocalist
      Chris Rostoff (also known as the voice of fellow speed metallers Steel Inferno). The album is
      a potent mixture of interstellar darkness and crazed speed metal riffing, and further cements
      the fact that Armory is a force to be reckoned with on the intergalactic battleground. Expect
      a rapid barrage of hyperspeed metal with influences from the dark cold void that engulfs us
      all – no solar system will be safe from the onslaught of ARMORY.
    </p>

    <p class="press-links">
      <router-link to="/logos">Download Logo</router-link>
      <b aria-hidden="true">•</b>
      <router-link to="/photos">Explore Photos</router-link>
    </p>

    <router-link class="band-photo-link" to="/photos" aria-label="Explore Armory press photos">
      <img src="../assets/armory2026.jpg" alt="Armory band portrait, 2026" />
    </router-link>

    <h1>Lineup</h1>

    <p>Anglegrinder – Thunder Bass</p>
    <p>Chris Rostoff – Vocals</p>
    <p>Space Ace – Drums</p>
    <p>G.G. Sundin – Guitars</p>
    <p>Ingelman – Guitars</p>

    <h1>Album Discography</h1>
    <p>
      <router-link to="/albums/world-peace-cosmic-war"
        ><b>2016: World Peace... Cosmic War</b></router-link
      >
    </p>
    <p>
      <router-link to="/albums/the-search"><b>2018: The Search</b></router-link>
    </p>
    <p>
      <router-link to="/albums/mercurion"><b>2022: Mercurion</b></router-link>
    </p>
    <p>
      <router-link to="/albums/echoes-of-the-astrolith"
        ><b>2026: Echoes of the Astrolith</b></router-link
      >
    </p>

    <h1>Additional Discography</h1>
    <p>2013: Open Fire! (Demo)</p>
    <p>2015: S.M.I. (Demo)</p>
    <p>
      2016: Critical Mass Vol. 3 <br />(compilation appearance with the song
      <span class="title">High Speed Death</span>)
    </p>
    <p>2018: Live in the Abyss (<a href="/fanclub">Fanclub</a>-only Live Cassette)</p>
    <p>2025: Black Star (7" single)</p>

    <h1>Links</h1>
    <p>
      <a href="https://armory417.bandcamp.com/">Bandcamp</a>
    </p>
    <p>
      <a href="https://open.spotify.com/artist/2mAu2bKoNDxD1jybBS1rku?si=PdF2nwUIRpam5CRc7V3i9Q"
        >Spotify</a
      >
    </p>
    <p>
      <a href="https://www.youtube.com/user/ArmoryOfficial">Official YouTube channel</a>
    </p>
    <p>
      <a href="https://www.facebook.com/armoryofficial/">Facebook</a>
    </p>
    <p>
      <a href="https://www.instagram.com/armorysweden/">Instagram</a>
    </p>
    <p>
      <a href="https://www.jawbreaker.se/product-tag/armory/">Official Merch</a>
    </p>
    <p>
      <router-link to="/fanclub">Fanclub</router-link>
    </p>
    <p>
      <a href="/ufo">Confirmed U.F.O. Sightings</a>
    </p>
    <h2>Videos</h2>
    <p>
      <a href="https://www.youtube.com/watch?v=9ikAgxP3Wj0&amp;list=RD9ikAgxP3Wj0"
        >Interceptor Squadron music video</a
      >
    </p>
    <p>
      <a href="https://www.youtube.com/watch?v=Uw76Hz1XCz8">Wormhole Escape music video</a>
    </p>
    <p>
      <a href="https://youtu.be/UYj3EnEON8k">Vault Seven music video</a>
    </p>
    <p>
      <a href="https://www.youtube.com/watch?v=9YDNAMrtTVU">The Search album trailer</a>
    </p>
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
ul {
  list-style-type: none;
}

h1 {
  margin: 2.75rem 0 0.45rem;
}

h1:first-child {
  margin-top: 0;
}

h2 {
  margin: 2.25rem 0 0.45rem;
}

h1 + p,
h2 + p {
  margin-top: 0;
}

.press-links {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.press-links b {
  color: var(--text-bright);
}

.band-photo-link {
  display: block;
}

.band-photo-link img {
  transition: filter 180ms ease, transform 180ms ease;
}

.band-photo-link:hover img,
.band-photo-link:focus-visible img {
  filter: brightness(1.08);
  transform: scale(1.005);
}
</style>
