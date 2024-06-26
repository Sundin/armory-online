import { createRouter, createWebHistory } from 'vue-router';

import Home from './home/Home.vue';
import About from './pages/About.vue';
import Tour from './tour/Tour.vue';
import Fanclub from './fanclub/Fanclub.vue';
import Merch from './pages/Merch.vue';
import Vault from './fanclub/Vault.vue';
import Lab from './fanclub/Lab.vue';
import Vote from './pages/Vote.vue';
import TenYears from './pages/10years.vue';
import Ufo from './pages/Ufo.vue';
import NotFound from './pages/NotFound.vue';

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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

export default router;
