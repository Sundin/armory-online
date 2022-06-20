import Home from './home/Home.vue';
import About from './pages/About.vue';
import Tour from './tour/Tour.vue';
import Fanclub from './fanclub/Fanclub.vue';
import Merch from './pages/Merch.vue';
import Vault from './fanclub/Vault.vue';
import Lab from './fanclub/Lab.vue';
import Vote from './pages/Vote.vue';

const routes = {
  '/': Home,
  '/about': About,
  '/tour': Tour,
  '/fanclub': Fanclub,
  '/merch': Merch,
  '/vault7': Vault,
  '/lab': Lab,
  '/10years': Vote,
  '/vote': Vote,
};

export default routes;
