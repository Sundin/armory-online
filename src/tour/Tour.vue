<template>
  <main-layout>
    <h1>Upcoming Gigs</h1>
    <div v-for="gig in getUpcomingGigs()" v-bind:key="gig.date">
      <gig-entry v-bind:item="gig" v-bind:pastgig=false></gig-entry>
    </div>
    <hr />
    <h1>Past Gigs</h1>
    <div v-for="gig in getPastGigs()" v-bind:key="gig.date">
      <gig-entry v-bind:item="gig" v-bind:pastgig=true></gig-entry>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import GigEntry from './Gig.vue';

const gigs = [
  {
    date: '2023-08-26',
    location: 'Trveheim Festival',
  },
  {
    date: '2023-08-29',
    location: 'Hemligheten (Skjulet), Gothenburg',
  },
  {
    date: '2023-10-20',
    location: 'EUROPEAN TOUR!!!',
    comment: 'More details to be announced soon',
  },
  {
    date: '2023-04-14',
    location: 'Bambi Galore, Hamburg',
    comment: 'With Helstar and Solicitör',
  },
  {
    date: '2023-04-15',
    location: 'Dying Victims Attack!, Essen',
  },
  {
    date: '2023-02-24',
    location: 'Musikens Hus, Gothenburg',
    venue: '10 Years Anniversary',
    link: '/10years',
    comment: '10th year anniversary gig with Deathhammer and Warhawk! All of you fans gets to vote for the setlist!',
    tickets: 'https://www.tickster.com/sv/events/9w81b5lafkxafw4/2023-02-24/deathhammer-armory-warhawk-24-2-musikens-hus',
  },
  {
    date: '2022-10-22',
    location: 'Bullet Bar, Växjö Rock City, Småland',
    comment: 'Intergalactic night with Acid Blade [GER] and Aquilla [POL]!',
  },
  {
    date: '2022-10-21',
    location: 'Bomber Bar, Motala',
    comment: 'Intergalactic night with Acid Blade [GER] and Aquilla [POL]!',
  },
  {
    date: '2022-06-05',
    location: 'Muskelrock, Småland',
  },
  {
    date: '2022-04-30',
    location: 'Fredericia, Denmark',
    comment: 'Metal Magic Warmup Party',
  },
  {
    date: '2022-05-07',
    location: 'The Abyss, Gothenburg',
    comment: 'Release party for Mercurion. Support: Tyranex',
  },
  {
    date: '2022-09-10',
    location: 'Sandviken, Sweden',
    venue: 'Sandviken Heavy Metal Army Club',
    link: 'https://www.facebook.com/events/802160321161004',
    comment: 'Support: Atonement',
  },
  {
    date: '2022-09-09',
    location: 'Stockholm, Sweden',
    venue: 'Klubb Fredagsmangel',
    comment: 'Support: Atonement',
    link: 'https://www.facebook.com/events/1466712630423740',
  },
  {
    date: '2022-01-08',
    location: 'Klubb Fredagsmangel, Stockholm, Sweden',
    cancelled: true,
  },
  {
    date: '2021-10-03',
    location: 'The Abyss, Gothenburg, Sweden',
  },
  {
    date: '2021-08-21',
    location: 'Klubb Noselake / Almenäs, Nässjö, Sweden',
    comment: 'Support: Commando',
  },
  {
    date: '2021-08-20',
    location: 'Bomber Bar, Motala, Sweden',
  },
  {
    date: '2020-12-05',
    location: 'Skyddsrummet Tolered, Hisingen, Sweden',
    cancelled: true,
  },
  {
    date: '2020-11-28',
    location: 'Almenäs, Nässjö, Sweden',
    cancelled: true,
  },
  {
    date: '2020-11-14',
    location: 'Plan B, Malmö, Sweden',
  },
  {
    date: '2020-11-27',
    location: 'Bomber Bar, Motala, Sweden',
    cancelled: true,
  },
  {
    date: '2020-04-17',
    location: 'The Abyss, Gothenburg, Sweden',
    comment: 'With Ambush',
    cancelled: true,
  },
  {
    date: '2022-01-15',
    location: 'Klubb Dissonans, Jönköping, Sweden',
    comment: 'Opening for DARKNESS',
    cancelled: true,
  },
  {
    date: '2019-06-28',
    venue: 'Noselake Metal Festival',
    location: 'Nässjö, Sweden',
    link: 'https://noselakemetalfestival.se/',
    tickets: 'https://secure.tickster.com/sv/wz6ztumev1t8wyu/products',
  },
  {
    date: '2019-07-12',
    venue: 'Metal Magic Festival',
    location: 'Fredericia, Denmark',
    link: 'http://metal-magic.dk/',
    tickets:
      'https://billetto.dk/e/metal-magic-festival-part-xii-billetter-322346?fbclid=IwAR0W_lAyDNbLSyW7frcsFTZu8NeZc7pyrwZqiFVGR09aSmxDS2W8FK02bFU',
  },
  {
    date: '2019-05-04',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
    comment: 'with Agent Steel - who did not show up - and Black Viper',
  },
  {
    date: '2019-03-10',
    location: 'Bambi Galore, Hamburg, Germany',
  },
  {
    date: '2019-03-09',
    location: 'Club Ragnarok, Bree, Belgium',
  },
  {
    date: '2019-03-08',
    location: 'MTS, Oldenburg, Germany',
  },
  {
    date: '2018-10-20',
    location: 'Plan B, Malmö, Sweden',
  },
  {
    date: '2018-07-28',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
    comment: 'releaseparty for The Search',
  },
  {
    date: '2018-06-02',
    location: 'Muskelrock, Blädinge, Sweden',
  },
  {
    date: '2018-03-03',
    location: 'Turbofest, Ljungby, Sweden',
  },
  {
    date: '2017-09-29',
    location: 'Huskvarna Rock & Art, Huskvarna, Sweden',
  },
  {
    date: '2017-06-16',
    location: 'The Abyss, Gothenburg, Sweden',
  },
  {
    date: '2017-06-10',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
  },
  {
    date: '2017-04-29',
    location: 'Gothenburg Rockfest, Sweden',
  },
  {
    date: '2017-02-18',
    location: 'Klubb Ostronet, Gothenburg, Sweden',
  },
  {
    date: '2017-02-17',
    location: 'Club Abraxas, Malmö, Sweden',
  },
  {
    date: '2016-11-19',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
  },
  {
    date: '2016-09-03',
    location: 'Copperfields, Stockholm, Sweden',
  },
  {
    date: '2016-08-26',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
    comment: 'releaseparty for World Peace... Cosmic War',
  },
  {
    date: '2016-05-21',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
    comment: 'releaseparty for Critical Mass Vol. 3',
  },
  {
    date: '2016-03-12',
    location: 'Pokalen, Oslo, Norway',
  },
  {
    date: '2015-10-31',
    location: 'Belsepub, Gothenburg, Sweden',
  },
  {
    date: '2015-09-12',
    location: 'Blood & Meat Fest, Vedum, Sweden',
  },
  {
    date: '2015-06-27',
    location: 'Truckstop Alaska, Gothenburg, Sweden',
  },
  {
    date: '2015-05-16',
    location: "Röde Orm biker's club, Götene, Sweden",
    comment: 'secret gig',
  },
  {
    date: '2014-09-27',
    location: 'Belsepub, Gothenburg, Sweden',
  },
  {
    date: '2014-05-07',
    location: 'Sticky Fingers, Gothenburg, Sweden',
  },
  {
    date: '2014-03-29',
    location: 'Kryptan, Växjö, Sweden',
  },
  {
    date: '2013-04-27',
    location: 'Brygghuset, Borås, Sweden',
  },
  {
    date: '2012-10-13',
    location: 'Verket, Umeå, Sweden',
  },
  {
    date: '2012-10-12',
    location: 'Sliperiet, Örnsköldsvik, Sweden',
  },
  {
    date: '2012-10-06',
    location: 'Stenhuset, Gothenburg, Sweden',
  },
];

const today = new Date().setHours(0);

export default {
  components: {
    MainLayout,
    GigEntry,
  },
  methods: {
    getUpcomingGigs() {
      return gigs
        .filter((gig) => new Date(gig.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    },
    getPastGigs() {
      return gigs
        .filter((gig) => new Date(gig.date) < today)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
};
</script>
