<template>
  <main-layout>
    <h1>Armory 10 years!</h1>
    <img src="../assets/posters/10years.jpg" />
    <p>
      We are celebrating 10 years as a band! We will celebrate with a big concert in Gothenburg on
      the 24th of February 2023. To spice things up, all our fans have the chance to vote on which
      songs we shall play! The songs with the most votes becomes the setlist.
    </p>
    <p>
      Buy tickets
      <a
        href="https://www.tickster.com/sv/events/9w81b5lafkxafw4/2023-02-24/deathhammer-armory-warhawk-24-2-musikens-hus"
        >HERE</a
      >.
    </p>
    <p>Poster by <a href="https://www.turborock.se">Turborock Productions</a>.</p>

    <p>
      <i>
        The vote has now closed! See you on February 24th were all your favourite songs will be
        played. All hail!
      </i>
    </p>
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
      fanclub: false,
      pw: '',
      email: '',
      wrongPassword: false,
      wrongEmail: false,
      inVoteMode: false,
      hasVoted: false,
      isLoadingVotes: true,
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
          albumTitle: 'S.M.I. Demo',
          selected: false,
        },
        {
          songTitle: 'Nightstalker',
          albumTitle: 'S.M.I. Demo',
          selected: false,
        },
        {
          songTitle: 'Alien Invasion',
          albumTitle: 'S.M.I. Demo',
          selected: false,
        },
        {
          songTitle: 'S.M.I.',
          albumTitle: 'S.M.I. Demo',
          selected: false,
        },
        {
          songTitle: 'Beyond The Path Of Blood',
          albumTitle: 'Open Fire Demo',
          selected: false,
        },
        {
          songTitle: 'Claustrophobic Death',
          albumTitle: 'Open Fire Demo',
          selected: false,
        },
        {
          songTitle: 'Into The Flames With The Witch',
          albumTitle: 'Open Fire Demo',
          selected: false,
        },
        {
          songTitle: 'Midnight Killer',
          albumTitle: 'Unreleased Fanclub Song',
          selected: false,
        },
      ],
    };
  },
  created() {
    if (localStorage.getItem('hasVoted')) {
      this.hasVoted = true;
    }
    this.loadVotes();
  },
  computed: {
    currentSetlist() {
      return this.sortedVotes.slice(0, 8);
    },
    runnerUps() {
      return this.sortedVotes.slice(8);
    },
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
    hasSelectedAnySongs() {
      return this.songs.filter((song) => song.selected).length > 0;
    },
  },
  methods: {
    submit() {
      if (!this.validateEmail(this.email)) {
        this.wrongEmail = true;
        console.log('invalid email');
        return;
      }
      this.wrongEmail = false;

      if (this.fanclub && !this.correctPassword()) {
        this.wrongPassword = true;
        console.log('invalid pw');
        return;
      }
      this.wrongPassword = false;

      const timestamp = Date.now();
      const myVotes = this.songs
        .filter((song) => song.selected)
        .map((song) => ({
          songId: song.songTitle,
          songTitle: song.songTitle,
          createdAt: timestamp,
          email: this.email,
        }));
      this.postVotes(myVotes);
      if (this.fanclub) {
        const secondVotes = myVotes.map((vote) => ({
          ...vote,
          email: `${this.email}-fc`,
        }));
        this.postVotes(secondVotes);
      }
      this.hasVoted = true;
      localStorage.setItem('hasVoted', true);
    },
    postVotes(myVotes) {
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
    loadVotes() {
      this.isLoadingVotes = true;
      axios
        .get(`${BASE_URL}`)
        .then((response) => {
          this.votes = response.data.votes;
          this.isLoadingVotes = false;
          console.log('votes', response.data.votes);
        })
        .catch((error) => {
          this.isLoadingVotes = false;
          console.log(error);
        });
    },
    viewResults() {
      this.inVoteMode = false;
      this.loadVotes();
    },
    validateEmail(email) {
      const res = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return res.test(email);
    },
    correctPassword() {
      const normalizedPassword = this.pw.toLowerCase().trim();
      return (
        this.hashCode(normalizedPassword) === -295629030
        || this.hashCode(normalizedPassword) === 386988864
      );
    },
    hashCode(str) {
      /* eslint no-bitwise: 0 */
      return str
        .split('')
        .reduce((prevHash, currVal) => ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0, 0);
    },
  },
};
</script>

<style scoped>
.form-check {
  display: flex;
  justify-content: center;
}
</style>
