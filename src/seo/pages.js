const siteUrl = 'https://www.armory.se';
const socialImage = `${siteUrl}/armory-social-preview-clean.png`;

const page = (path, title, description) => ({
  path,
  title,
  description,
  canonical: `${siteUrl}${path}`,
  socialImage,
});

// Keep this module free from Vue and imported assets: Node reads it during build.
export const prerenderedPages = [
  page(
    '/discography',
    'Armory — Discography',
    'Four full-length transmissions and further signals from the Armory archive.',
  ),
  page(
    '/albums/world-peace-cosmic-war',
    'World Peace... Cosmic War — Armory',
    'Armory’s first full-length transmission established a hyperspeed collision of classic heavy metal and science-fiction warfare.',
  ),
  page(
    '/albums/the-search',
    'The Search — Armory',
    'Armory’s second album ventures beyond the confinement of our home world in search of truth and understanding.',
  ),
  page(
    '/albums/mercurion',
    'Mercurion — Armory',
    'The epic tale of the spaceship Mercurion, Armory’s first back-to-back concept album.',
  ),
  page(
    '/albums/echoes-of-the-astrolith',
    'Echoes of the Astrolith — Armory',
    'Listen carefully to the echoes and let the signals from space assume control of your minds.',
  ),
];
