<template>
  <main-layout>
    <div v-if="!inVoteMode">
      <p>
        We are celebrating 10 years as a band this year! We will celebrate with a big concert in
        Gothenburg later this year. To spice things up, you guys have the chance to vote on which
        songs we shall play! The songs with the most votes becomes the setlist.
      </p>
      <div v-if="!hasVoted">
        <button v-on:click="inVoteMode = true">Click here to vote!</button>
      </div>
      <h3>Current Setlist:</h3>
      <div class="votes">
        <div v-for="item in currentSetlist" v-bind:key="item.songId">
          <p>
            {{ item.songTitle + " (" + item.count + " " + (item.count > 1 ? "votes" : "vote") }})
          </p>
        </div>
      </div>
      <h3>Runner Ups:</h3>
      <div class="votes">
        <div v-for="item in runnerUps" v-bind:key="item.songId">
          <p>
            {{ item.songTitle + " (" + item.count + " " + (item.count > 1 ? "votes" : "vote") }})
          </p>
        </div>
      </div>
    </div>
    <div v-else-if="hasVoted">
      <p>Thanks for voting!</p>
      <button v-on:click="inVoteMode = false">View results</button>
    </div>
    <div v-else>
      <p>
        We are celebrating 10 years as a band this year! We will celebrate with a big concert in
        Gothenburg later this year. To spice things up, you guys have the chance to vote on which
        songs we shall play! The songs with the most votes becomes the setlist.
      </p>
      <p>Select songs to vote on:</p>
      <form @submit.prevent="submit">
        <h3>Mercurion (2022)</h3>
        <div
          v-for="song in songs.filter(song => song.albumTitle === 'Mercurion')"
          v-bind:key="song.songTitle"
        >
          <div class="form-check">
            <input
              type="checkbox"
              v-model="song.selected"
              :id="song.songTitle"
              class="form-check-input"
            />
            <label class="form-check-label" :for="song.songTitle">{{ song.songTitle }}</label>
          </div>
        </div>

        <h3>The Search (2018)</h3>
        <div
          v-for="song in songs.filter(song => song.albumTitle === 'The Search')"
          v-bind:key="song.songTitle"
        >
          <div class="form-check">
            <input
              type="checkbox"
              v-model="song.selected"
              :id="song.songTitle"
              class="form-check-input"
            />
            <label class="form-check-label" :for="song.songTitle">{{ song.songTitle }}</label>
          </div>
        </div>

        <h3>World Peace... Cosmic War (2016)</h3>
        <div
          v-for="song in songs.filter(song => song.albumTitle === 'World Peace... Cosmic War')"
          v-bind:key="song.songTitle"
        >
          <div class="form-check">
            <input
              type="checkbox"
              v-model="song.selected"
              :id="song.songTitle"
              class="form-check-input"
            />
            <label class="form-check-label" :for="song.songTitle">{{ song.songTitle }}</label>
          </div>
        </div>

        <h3>S.M.I. Demo (2015)</h3>
        <div
          v-for="song in songs.filter(song => song.albumTitle === 'S.M.I. Demo')"
          v-bind:key="song.songTitle"
        >
          <div class="form-check">
            <input
              type="checkbox"
              v-model="song.selected"
              :id="song.songTitle"
              class="form-check-input"
            />
            <label class="form-check-label" :for="song.songTitle">{{ song.songTitle }}</label>
          </div>
        </div>

        <h3>Open Fire Demo (2013)</h3>
        <div
          v-for="song in songs.filter(song => song.albumTitle === 'Open Fire Demo')"
          v-bind:key="song.songTitle"
        >
          <div class="form-check">
            <input
              type="checkbox"
              v-model="song.selected"
              :id="song.songTitle"
              class="form-check-input"
            />
            <label class="form-check-label" :for="song.songTitle">{{ song.songTitle }}</label>
          </div>
        </div>

        <h3>Unreleased Fanclub Song</h3>
        <div
          v-for="song in songs.filter(song => song.albumTitle === 'Unreleased Fanclub Song')"
          v-bind:key="song.songTitle"
        >
          <div class="form-check">
            <input
              type="checkbox"
              v-model="song.selected"
              :id="song.songTitle"
              class="form-check-input"
            />
            <label class="form-check-label" :for="song.songTitle">{{ song.songTitle }}</label>
          </div>
        </div>

        <hr />
        <hr />

        <label>Enter your email address: </label>
        <input v-model="email" v-bind:class="{ wrongPassword: this.wrongEmail }" />

        <hr />

        <div class="form-check">
          <input type="checkbox" v-model="fanclub" id="accept" class="form-check-input" />
          <label class="form-check-label" for="accept"
            >I'm a fanclub member, so my votes count twice!</label
          >
        </div>

        <div v-show="fanclub">
          <p>Enter the fanclub password for 2022 (you will find it in the fanclub letter):</p>
          <input type="password" v-bind:class="{ wrongPassword: wrongPassword }" v-model="pw" />
        </div>

        <hr />

        <div class="form-group">
          <button :disabled="!hasSelectedAnySongs">Submit</button>
        </div>
      </form>
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
      fanclub: false,
      pw: '',
      email: '',
      wrongPassword: false,
      wrongEmail: false,
      inVoteMode: false,
      hasVoted: false,
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
    validateEmail(email) {
      const res = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return res.test(email);
    },
    correctPassword() {
      const normalizedPassword = this.pw.toLowerCase().trim();
      return this.hashCode(normalizedPassword) === -126205242;
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
input {
  background-color: #000000;
  color: var(--text-color);
  font-size: 21px;
  text-align: center;
  border: 2px solid var(--text-color);
  outline: none;
}

.wrongPassword {
  border: 2px solid #ff0000;
  color: #ff0000;
  animation-name: blinker;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-delay: infinite;
  animation-iteration-count: 3;
  animation-direction: alternate;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

button.validPassword {
  border: 2px solid #00ce1c;
  color: #00ce1c;
  animation-name: blinker;
  animation-duration: 0.4s;
  animation-timing-function: linear;
  animation-delay: infinite;
  animation-iteration-count: 1;
  animation-direction: alternate;
  opacity: 1;
}

.form-check {
  display: flex;
  justify-content:center;
}
</style>
