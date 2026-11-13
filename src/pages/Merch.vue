<template>
  <main-layout>
    <h1>Merch</h1>
    <p class="merch-intro">Selected merch items:</p>

    <div class="merch-grid">
      <a
        v-for="product in products"
        :key="product.url"
        class="merch-card"
        :href="product.url"
        :aria-label="`Shop ${product.name} at Jawbreaker Records`"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="merch-image">
          <img :src="product.image" :alt="product.name" loading="lazy" />
        </span>
        <span class="merch-name">{{ product.name }}</span>
        <span class="merch-cta">View transmission <span aria-hidden="true">↗</span></span>
      </a>
    </div>

    <section class="merch-support">
      <p>
        Support Armory directly by ordering your speed metal merchandise from any of the following
        links.
      </p>
      <p>
        <a href="https://www.jawbreaker.se/product-tag/armory/">Jawbreaker Records</a>
      </p>
      <p>
        <a href="https://armory417.bandcamp.com/">Bandcamp</a>
      </p>
      <p>
        <a href="https://shop.dying-victims.de/en/search?controller=search&amp;s=armory"
          >Dying Victims</a
        >
      </p>
    </section>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import backpatch from '../assets/merch/backpatch.jpg';
import blackStar from '../assets/merch/black-star.jpg';
import echoesBlackVinyl from '../assets/merch/echoes-black-vinyl.jpg';
import echoesCassette from '../assets/merch/echoes-cassette.jpg';
import echoesCd from '../assets/merch/echoes-cd.jpg';
import echoesRedVinyl from '../assets/merch/echoes-red-vinyl.jpg';
import echoesTshirt from '../assets/merch/echoes-tshirt.jpg';
import interceptorTshirt from '../assets/merch/interceptor-tshirt.jpg';
import metalPin from '../assets/merch/metal-pin.jpg';
import necklace from '../assets/merch/necklace.jpg';
import posterFlag from '../assets/merch/poster-flag.jpg';
import silkScarf from '../assets/merch/silk-scarf.jpg';
import truckerCap from '../assets/merch/trucker-cap.jpg';
import trianglePatch from '../assets/merch/triangle-patch.jpg';

const products = [
  {
    name: 'Echoes of the Astrolith — Red Vinyl',
    url: 'https://www.jawbreaker.se/product/armory-echoes-of-the-astrolith-lp-red-vinyl/',
    image: echoesRedVinyl,
  },
  {
    name: 'Echoes of the Astrolith T-Shirt',
    url: 'https://www.jawbreaker.se/product/armory-echoes-of-the-astrolith-t-shirt/',
    image: echoesTshirt,
  },
  {
    name: 'Echoes of the Astrolith — Black Vinyl',
    url: 'https://www.jawbreaker.se/product/armory-echoes-of-the-astrolith-lp/',
    image: echoesBlackVinyl,
  },
  {
    name: 'Echoes of the Astrolith — CD',
    url: 'https://www.jawbreaker.se/product/armory-echoes-of-the-astrolith-cd/',
    image: echoesCd,
  },
  {
    name: 'Echoes of the Astrolith — Cassette',
    url: 'https://www.jawbreaker.se/product/armory-echoes-of-the-astrolith-cassette/',
    image: echoesCassette,
  },
  {
    name: 'Interceptor Squadron T-Shirt',
    url: 'https://www.jawbreaker.se/product/armory-interceptor-squadron-t-shirt/',
    image: interceptorTshirt,
  },
  {
    name: 'Armory Trucker Cap',
    url: 'https://www.jawbreaker.se/product/armory-trucker-cap/',
    image: truckerCap,
  },
  {
    name: 'Black Star — 7″',
    url: 'https://www.jawbreaker.se/product/armory-black-star/',
    image: blackStar,
  },
  {
    name: 'Armory Metal Pin',
    url: 'https://www.jawbreaker.se/product/armory-metal-pin/',
    image: metalPin,
  },
  {
    name: 'Armory Necklace',
    url: 'https://www.jawbreaker.se/product/armory-necklace/',
    image: necklace,
  },
  {
    name: 'Armory Triangle Patch',
    url: 'https://www.jawbreaker.se/product/armory-triangle-patch/',
    image: trianglePatch,
  },
  {
    name: 'Armory Backpatch',
    url: 'https://www.jawbreaker.se/product/armory-backpatch/',
    image: backpatch,
  },
  {
    name: 'Armory Poster-Flag',
    url: 'https://www.jawbreaker.se/product/armory-poster-flag/',
    image: posterFlag,
  },
  {
    name: 'Armory Silk Scarf',
    url: 'https://www.jawbreaker.se/product/armory-silk-scarf/',
    image: silkScarf,
  },
];

export default {
  components: {
    MainLayout,
  },
  data() {
    return { products };
  },
};
</script>

<style scoped>
.merch-intro {
  color: var(--text-bright);
  font-weight: 900;
  letter-spacing: 0.08em;
  margin: -1rem 0 1.75rem;
  text-transform: uppercase;
}

.merch-grid {
  display: grid;
  gap: clamp(1rem, 2.5vw, 1.6rem);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0 0 clamp(3rem, 7vw, 5rem);
}

.merch-card {
  background: linear-gradient(145deg, rgba(17, 32, 19, 0.96), rgba(0, 0, 0, 0.98));
  border: 1px solid rgba(196, 255, 129, 0.72);
  box-shadow:
    0 0 0 4px #020503,
    0 0 0 5px rgba(255, 90, 24, 0.5),
    0 0 20px rgba(65, 226, 56, 0.08);
  color: var(--text-bright);
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  padding: 0.55rem;
  position: relative;
  text-decoration: none;
  transform: translateZ(0);
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;
}

.merch-card::before,
.merch-card::after {
  border-color: var(--link-color);
  border-style: solid;
  content: "";
  height: 1.1rem;
  pointer-events: none;
  position: absolute;
  transition: height 180ms ease, width 180ms ease;
  width: 1.1rem;
  z-index: 2;
}

.merch-card::before {
  border-width: 3px 0 0 3px;
  left: 0.28rem;
  top: 0.28rem;
}

.merch-card::after {
  border-width: 0 3px 3px 0;
  bottom: 0.28rem;
  right: 0.28rem;
}

.merch-image {
  aspect-ratio: 1;
  background: #030604;
  display: block;
  overflow: hidden;
}

.merch-image img {
  height: 100%;
  object-fit: cover;
  transition: filter 240ms ease, transform 240ms ease;
  width: 100%;
}

.merch-name {
  font-family: var(--display-font);
  font-size: clamp(1.05rem, 2vw, 1.32rem);
  font-weight: 400;
  letter-spacing: 0.045em;
  line-height: 1.08;
  padding: 0.85rem 0.55rem 0.35rem;
  text-shadow: 1px 1px 0 #0d4c12;
  text-transform: uppercase;
}

.merch-cta {
  color: var(--link-color);
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  margin-top: auto;
  padding: 0 0.55rem 0.65rem;
  text-transform: uppercase;
}

.merch-card:hover,
.merch-card:focus-visible {
  border-color: #fff;
  box-shadow:
    0 0 0 4px #020503,
    0 0 0 5px var(--link-color),
    0 0 28px rgba(255, 90, 24, 0.42);
  color: #fff;
  text-shadow: none;
  transform: translateY(-0.45rem) rotate(-0.35deg);
}

.merch-card:hover::before,
.merch-card:hover::after,
.merch-card:focus-visible::before,
.merch-card:focus-visible::after {
  height: 2.1rem;
  width: 2.1rem;
}

.merch-card:hover .merch-image img,
.merch-card:focus-visible .merch-image img {
  filter: contrast(1.08) saturate(1.12);
  transform: scale(1.055);
}

.merch-support {
  border-top: 1px dashed var(--line);
  padding-top: clamp(1.5rem, 4vw, 2.5rem);
}

.merch-support p:first-child {
  max-width: 46rem;
}

.merch-support p:not(:first-child) {
  margin: 0.45rem 0;
}

@media screen and (max-width: 820px) {
  .merch-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media screen and (max-width: 460px) {
  .merch-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .merch-card,
  .merch-card::before,
  .merch-card::after,
  .merch-image img {
    transition: none;
  }

  .merch-card:hover,
  .merch-card:focus-visible {
    transform: none;
  }
}
</style>
