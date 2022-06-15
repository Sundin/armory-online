<template>
  <main-layout>
    <p>
      We are celebrating 10 years as a band this year! We will celebrate with a big concert in
      Gothenburg later this year. To spice things up, you guys have the chance to vote on which
      songs we shall play! The songs with the most votes becomes the setlist.
    </p>
    <form @submit.prevent="submit">
      <h3>Mercurion (2022)</h3>
      <div
        v-for="song in songs.filter(song => song.albumTitle === 'Mercurion')"
        v-bind:key="song.songTitle"
      >
        <div class="form-group form-check">
          <input type="checkbox" v-model="song.selected" id="accept" class="form-check-input" />
          <label class="form-check-label" for="accept">{{ song.songTitle }}</label>
        </div>
      </div>

      <h3>The Search (2018)</h3>
      <div
        v-for="song in songs.filter(song => song.albumTitle === 'The Search')"
        v-bind:key="song.songTitle"
      >
        <div class="form-group form-check">
          <input type="checkbox" v-model="song.selected" id="accept" class="form-check-input" />
          <label class="form-check-label" for="accept">{{ song.songTitle }}</label>
        </div>
      </div>

      <h3>World Peace... Cosmic War (2016)</h3>
      <div
        v-for="song in songs.filter(song => song.albumTitle === 'World Peace... Cosmic War')"
        v-bind:key="song.songTitle"
      >
        <div class="form-group form-check">
          <input type="checkbox" v-model="song.selected" id="accept" class="form-check-input" />
          <label class="form-check-label" for="accept">{{ song.songTitle }}</label>
        </div>
      </div>

      <h3>S.M.I. Demo (2015)</h3>
      <div
        v-for="song in songs.filter(song => song.albumTitle === 'S.M.I.')"
        v-bind:key="song.songTitle"
      >
        <div class="form-group form-check">
          <input type="checkbox" v-model="song.selected" id="accept" class="form-check-input" />
          <label class="form-check-label" for="accept">{{ song.songTitle }}</label>
        </div>
      </div>

      <div class="form-group">
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>

    <h3>Current Setlist:</h3>
    <div class="votes">
      <div v-for="item in sortedVotes" v-bind:key="item.songId">
        <p>{{ item.songTitle + " (" + item.count + " " + (item.count > 1 ? "votes" : "vote") }})</p>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';

const axios = require('axios').default;

const BASE_URL = 'https://7e8jzft898.execute-api.eu-west-1.amazonaws.com/Prod/votes';

export default {
  components: {
    MainLayout,
  },
  data() {
    return {
      votes: [],
      songs: [
        {
          songTitle: 'A Message From The Stars',
          albumTitle: 'Mercurion',
          selected: false,
        },
        {
          songTitle: 'Journey Into Infinity',
          albumTitle: 'Mercurion',
          selected: false,
        },
        {
          songTitle: 'Transneptunic Flight',
          albumTitle: 'Mercurion',
          selected: false,
        },
        {
          songTitle: 'The Hunters From Beyond',
          albumTitle: 'Mercurion',
          selected: false,
        },
        {
          songTitle: 'Deep Space Encounter',
          albumTitle: 'Mercurion',
          selected: false,
        },
        {
          songTitle: 'Void Prison',
          albumTitle: 'Mercurion',
          selected: false,
        },
        {
          songTitle: 'Wormhole Escape',
          albumTitle: 'Mercurion',
          selected: false,
        },
        {
          songTitle: 'Music Of The Spheres',
          albumTitle: 'Mercurion',
          selected: false,
        },
        {
          songTitle: 'Event Horizon',
          albumTitle: 'Mercurion',
          selected: false,
        },
        {
          songTitle: 'The Search',
          albumTitle: 'The Search',
          selected: false,
        },
        {
          songTitle: 'Hyperion',
          albumTitle: 'The Search',
          selected: false,
        },
        {
          songTitle: 'Rise Above',
          albumTitle: 'The Search',
          selected: false,
        },
        {
          songTitle: 'Vault Seven',
          albumTitle: 'The Search',
          selected: false,
        },
        {
          songTitle: 'Bringer Of Light',
          albumTitle: 'The Search',
          selected: false,
        },
        {
          songTitle: 'Heavy Metal Impact',
          albumTitle: 'The Search',
          selected: false,
        },
        {
          songTitle: 'The Twin Suns Of Solaris',
          albumTitle: 'The Search',
          selected: false,
        },
        {
          songTitle: 'Utomjordisk Dominans',
          albumTitle: 'The Search',
          selected: false,
        },
        {
          songTitle: 'Polymorphic Intruders',
          albumTitle: 'The Search',
          selected: false,
        },
        {
          songTitle: 'Hisingen Warriors',
          albumTitle: 'The Search',
          selected: false,
        },
        {
          songTitle: 'Cosmic War',
          albumTitle: 'World Peace... Cosmic War',
          selected: false,
        },
        {
          songTitle: 'High Speed Death',
          albumTitle: 'World Peace... Cosmic War',
          selected: false,
        },
        {
          songTitle: "Hell's Fast Blades",
          albumTitle: 'World Peace... Cosmic War',
          selected: false,
        },
        {
          songTitle: 'Spinning Towards Doom',
          albumTitle: 'World Peace... Cosmic War',
          selected: false,
        },
        {
          songTitle: 'Without Days, Without Years',
          albumTitle: 'World Peace... Cosmic War',
          selected: false,
        },
        {
          songTitle: 'Artificial Slavery',
          albumTitle: 'World Peace... Cosmic War',
          selected: false,
        },
        {
          songTitle: 'Phantom Warrior',
          albumTitle: 'World Peace... Cosmic War',
          selected: false,
        },
        {
          songTitle: 'Final Breath',
          albumTitle: 'World Peace... Cosmic War',
          selected: false,
        },
        {
          songTitle: 'Space Marauders',
          albumTitle: 'World Peace... Cosmic War',
          selected: false,
        },
        {
          songTitle: 'Blazing Lazers',
          albumTitle: 'S.M.I.',
          selected: false,
        },
        {
          songTitle: 'Nightstalker',
          albumTitle: 'S.M.I.',
          selected: false,
        },
        {
          songTitle: 'Alien Invasion',
          albumTitle: 'S.M.I.',
          selected: false,
        },
        {
          songTitle: 'S.M.I.',
          albumTitle: 'S.M.I.',
          selected: false,
        },
      ],
    };
  },
  created() {
    axios
      .get(`${BASE_URL}`)
      .then((response) => {
        this.votes = response.data.votes;
        console.log('votes', response.data.votes);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    sortedVotes() {
      const formattedVotes = {};

      this.votes.forEach((vote) => {
        if (!formattedVotes[vote.songId]) {
          formattedVotes[vote.songId] = {
            count: 0,
            songTitle: vote.songTitle,
            songId: vote.songId,
          };
        }
        formattedVotes[vote.songId].count += 1;
      });

      const sortedVotes = Object.values(formattedVotes);
      sortedVotes.sort((a, b) => b.count - a.count);

      return sortedVotes;
    },
  },
  methods: {
    submit() {
      const timestamp = Date.now();
      const myVotes = this.songs
        .filter((song) => song.selected)
        .map((song) => ({
          songId: song.songTitle,
          songTitle: song.songTitle,
          createdAt: timestamp,
          email: 'hej2',
        }));

      myVotes.forEach((vote) => {
        axios
          .post(BASE_URL, vote)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
  },
};
</script>
