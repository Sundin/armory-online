import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('./home/Home.vue');
const About = () => import('./pages/About.vue');
const Tour = () => import('./tour/Tour.vue');
const Fanclub = () => import('./fanclub/Fanclub.vue');
const Merch = () => import('./pages/Merch.vue');
const Vault = () => import('./fanclub/Vault.vue');
const Lab = () => import('./fanclub/Lab.vue');
const Vote = () => import('./pages/Vote.vue');
const TenYears = () => import('./pages/10years.vue');
const Ufo = () => import('./pages/Ufo.vue');
const NotFound = () => import('./pages/NotFound.vue');

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
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

export default router;
