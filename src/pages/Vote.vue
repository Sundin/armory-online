<template>
  <main-layout>
    <form @submit.prevent="submit">
      <div v-for="song in songs" v-bind:key="song.songId">
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
          songId: '1x',
          songTitle: 'Cool 1 x',
          selected: false,
        },
        {
          songId: '2x',
          songTitle: 'Cool 2 x',
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
          songId: song.songId,
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
