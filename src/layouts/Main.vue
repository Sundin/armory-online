<template>
  <div class="bg">
    <div id="app">
      <SiteHeader />
      <div id="content" role="main">
        <slot></slot>
      </div>
      <footer class="site-footer">
        <span>Armory Command</span>
        <span aria-hidden="true">★</span>
        <span>Gothenburg · Earth</span>
      </footer>
    </div>
  </div>
</template>

<script>
import SiteHeader from '../components/Header.vue';

export default {
  name: 'AppLayout',
  components: {
    SiteHeader,
  },
};
</script>

<style>
:root {
  --text-color: #41e238;
  --text-bright: #c4ff81;
  --link-color: #ff5a18;
  --hover-color: #ffffff;
  --panel: rgba(0, 7, 4, 0.88);
  --line: rgba(65, 226, 56, 0.38);
  --display-font: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  --body-font: "Trebuchet MS", Verdana, sans-serif;
  color-scheme: dark;
  font-size: 100%;
}

body,
html {
  min-height: 100%;
  background-color: black;
  margin: 0;
}

* {
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}

#app {
  font-family: var(--body-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  min-height: 100vh;
}

#content {
  background: var(--panel);
  border: 1px solid var(--line);
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.68), 0 0 40px rgba(21, 255, 49, 0.08);
  margin: clamp(1rem, 3vw, 2.5rem) auto;
  min-height: 54vh;
  padding: clamp(1.25rem, 4vw, 3.5rem);
  position: relative;
  width: min(100% - 2rem, 980px);
}

#content::before {
  border: 1px dashed rgba(65, 226, 56, 0.2);
  content: "";
  inset: 0.45rem;
  pointer-events: none;
  position: absolute;
}

.bg {
  background-image: url("../assets/starbackground.gif");
  background-attachment: fixed;
  min-height: 100vh;
  background-repeat: repeat;
  isolation: isolate;
  position: relative;
}

.bg::after {
  background: repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.018) 0, rgba(255, 255, 255, 0.018) 1px, transparent 1px, transparent 4px);
  content: "";
  inset: 0;
  pointer-events: none;
  position: fixed;
  z-index: 20;
}

a {
  color: var(--link-color);
  font-weight: 800;
  text-underline-offset: 0.18em;
  transition: color 120ms linear, text-shadow 120ms linear;
}

a:hover {
  color: var(--hover-color);
  text-shadow: 0 0 8px currentColor;
}

img {
  max-width: 100%;
  height: auto;
}

hr {
  border: 0;
  border-top: 1px dashed var(--line);
  margin: 2.5rem 0;
  width: 100%;
}

span.title {
  font-style: italic;
}

button {
  background: #050f08;
  color: var(--text-bright);
  font-size: 0.82rem;
  font-weight: 900;
  text-align: center;
  border: 2px outset var(--text-color);
  padding: 0.85rem 1.2rem;
  margin: 0.5rem;
  font-family: var(--body-font);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: var(--text-color);
  color: #001500;
}
button:disabled {
  opacity: 0.5;
}
button:disabled:hover {
  opacity: 0.5;
  background-color: #410000;
  cursor: default;
}

input {
  background-color: #000;
  color: var(--text-color);
  font-size: 1rem;
  text-align: center;
  border: 2px solid var(--text-color);
  border-radius: 0;
  outline: none;
  padding: 0.65rem;
}

h1,
h2,
h3 {
  color: var(--text-bright);
  font-family: var(--display-font);
  font-weight: 400;
  letter-spacing: 0.055em;
  line-height: 1;
  text-shadow: 2px 2px 0 #0d4c12, 0 0 12px rgba(65, 226, 56, 0.28);
  text-transform: uppercase;
}

h1 {
  font-size: clamp(2.6rem, 8vw, 5rem);
  margin-top: 0;
}

h2 {
  font-size: clamp(1.9rem, 5vw, 3.2rem);
}

h3 {
  font-size: clamp(1.35rem, 3vw, 2rem);
}

p,
li {
  font-size: clamp(0.98rem, 1.5vw, 1.1rem);
  line-height: 1.7;
}

.wrongPassword {
  border: 2px solid #ff0000;
  color: #ff0000;
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

.site-footer {
  align-items: center;
  background: rgba(0, 0, 0, 0.88);
  border-top: 1px solid var(--line);
  display: flex;
  font: 800 0.66rem/1 var(--body-font);
  gap: 1rem;
  justify-content: center;
  letter-spacing: 0.13em;
  padding: 1.5rem;
  text-transform: uppercase;
}

button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid white;
  outline-offset: 4px;
}

@media screen and (max-width: 600px) {
  #content {
    width: min(100% - 1rem, 980px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .bg {
    background-image: url("../assets/background.jpg");
  }
}
</style>
