<template>
  <main-layout>
    <h3>Current Setlist:</h3>
    <div class="votes">
      <div v-for="item in sortedVotes" v-bind:key="item.songId">
        <p>{{item.songTitle + " (" + item.count + " " + (item.count > 1 ? "votes" : "vote")}})</p>
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
    },
  },
};
</script>
