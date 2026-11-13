import echoesArtwork from '../assets/echoes_of_the_astrolith.jpg';
import mercurionArtwork from '../assets/mercurion.jpg';
import searchArtwork from '../assets/the_search.jpg';
import worldPeaceArtwork from '../assets/world_peace_cosmic_war.jpg';

export const albums = [
  {
    slug: 'world-peace-cosmic-war',
    title: 'World Peace... Cosmic War',
    year: '2016',
    released: 'August 19, 2016',
    label: 'High Roller Records',
    artwork: worldPeaceArtwork,
    artworkAlt: 'World Peace... Cosmic War album cover',
    bandcamp: 'https://armory417.bandcamp.com/album/world-peace-cosmic-war',
    summary:
      'Armory’s first full-length transmission established the band’s hyperspeed collision of classic heavy metal and science-fiction warfare. A spoken launch sequence gives way to nine songs of cosmic conflict, mechanized danger and marauders in deep space.',
    tracks: [
      ['World Peace... (intro)', '1:09'],
      ['Cosmic War', '3:50'],
      ['High Speed Death', '3:06'],
      ["Hell's Fast Blades", '5:25'],
      ['Spinning Towards Doom', '3:48'],
      ['Without Days, Without Years', '4:10'],
      ['Artificial Slavery', '5:26'],
      ['Phantom Warrior', '3:01'],
      ['Final Breath', '2:39'],
      ['Space Marauders', '9:17'],
    ],
  },
  {
    slug: 'the-search',
    title: 'The Search',
    year: '2018',
    released: 'July 13, 2018',
    label: 'High Roller Records',
    artwork: searchArtwork,
    artworkAlt: 'The Search album cover',
    bandcamp: 'https://armory417.bandcamp.com/album/the-search',
    summary:
      'The second album pushed the voyage farther into the unknown. Across eleven tracks, Armory moves from the title mission and the frozen moon Hyperion to Vault Seven, extraterrestrial domination and the home-front charge of “Hisingen Warriors.”',
    tracks: [
      ['The Search', '5:11'],
      ['Hyperion', '3:20'],
      ['Rise Above', '4:14'],
      ['Star Voyage', '0:56'],
      ['Vault Seven', '3:32'],
      ['Bringer of Light', '3:24'],
      ['Heavy Metal Impact', '4:03'],
      ['The Twin Suns of Solaris', '3:25'],
      ['Utomjordisk Dominans', '3:22'],
      ['Polymorphic Intruders', '3:29'],
      ['Hisingen Warriors', '5:47'],
    ],
  },
  {
    slug: 'mercurion',
    title: 'Mercurion',
    year: '2022',
    released: 'April 22, 2022',
    label: 'Dying Victims Productions',
    artwork: mercurionArtwork,
    artworkAlt: 'Mercurion album cover',
    bandcamp: 'https://armory417.bandcamp.com/album/mercurion',
    summary:
      'Armory’s third album is a nine-stage journey beyond the known system. The record travels from a message in the stars through trans-Neptunian flight, hostile encounters and a void prison before disappearing across the event horizon.',
    tracks: [
      ['Message From the Stars', '4:26'],
      ['Journey Into Infinity', '4:25'],
      ['Transneptunic Flight', '2:17'],
      ['The Hunters From Beyond', '3:33'],
      ['Deep Space Encounter', '5:52'],
      ['Void Prison', '3:39'],
      ['Wormhole Escape', '4:40'],
      ['Music From the Spheres', '6:57'],
      ['Event Horizon', '6:19'],
    ],
  },
  {
    slug: 'echoes-of-the-astrolith',
    title: 'Echoes of the Astrolith',
    year: '2026',
    released: 'October 23, 2026',
    label: 'Dying Victims Productions',
    formatNote: 'LP/CD by Dying Victims Productions · cassette by Jawbreaker Records',
    artwork: echoesArtwork,
    artworkAlt: 'Echoes of the Astrolith album cover',
    bandcamp: 'https://armory417.bandcamp.com/album/echoes-of-the-astrolith',
    summary:
      'The fourth full-length opens the Mark II era with turbo-laser vocalist Chris Rostoff. Darker, heavier and more relentless, its ten tracks accelerate Armory’s cosmic speed metal into a menacing parallel universe of terror frequencies, ominous signals and rising astroliths.',
    tracks: [
      ['Return of the True Godz', '3:28'],
      ['Interceptor Squadron', '3:04'],
      ['Cosmic Dreams', '3:56'],
      ['Frequencies of Terror', '3:07'],
      ['Omens', '3:03'],
      ['Sanity Disposed', '3:43'],
      ['The Final Invention', '5:29'],
      ['Spaceworkz', '3:10'],
      ['Astrolith (Rising)', '5:01'],
      ['Pillars of Fire', '5:11'],
    ],
  },
];

export const albumBySlug = (slug) => albums.find((album) => album.slug === slug);
