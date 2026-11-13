import { createRouter, createWebHistory } from 'vue-router';
import Home from './home/Home.vue';
import About from './pages/About.vue';
import Tour from './tour/Tour.vue';
import Fanclub from './fanclub/Fanclub.vue';
import Merch from './pages/Merch.vue';

const Vault = () => import('./fanclub/Vault.vue');
const Lab = () => import('./fanclub/Lab.vue');
const Vote = () => import('./pages/Vote.vue');
const TenYears = () => import('./pages/10years.vue');
const Ufo = () => import('./pages/Ufo.vue');
const Album = () => import('./pages/Album.vue');
const Photos = () => import('./pages/Photos.vue');
const NotFound = () => import('./pages/NotFound.vue');

const STALE_ROUTE_RELOAD_KEY = 'armory:stale-route-reload';
const STALE_MODULE_PATTERN = /dynamically imported module|importing a module script failed|loading chunk \d+ failed|unable to preload css/i;

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/tour', component: Tour },
  { path: '/fanclub', component: Fanclub },
  { path: '/merch', component: Merch },
  { path: '/vault7', component: Vault },
  { path: '/lab', component: Lab },
  { path: '/10years', component: TenYears },
  { path: '/vote', component: Vote },
  { path: '/ufo', component: Ufo },
  { path: '/albums/:slug', component: Album },
  { path: '/photos', component: Photos },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

router.onError((error, to) => {
  if (!STALE_MODULE_PATTERN.test(error?.message || String(error))) return;

  const retryPath = to.fullPath;
  if (sessionStorage.getItem(STALE_ROUTE_RELOAD_KEY) === retryPath) return;

  sessionStorage.setItem(STALE_ROUTE_RELOAD_KEY, retryPath);
  window.location.assign(retryPath);
});

router.afterEach((...navigation) => {
  if (!navigation[2]) sessionStorage.removeItem(STALE_ROUTE_RELOAD_KEY);
});

export default router;
