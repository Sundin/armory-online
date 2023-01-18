<template>
  <main-layout>
    <div v-if="hasAccess">
      <div>
        <h1>Greetings, Space Marauder!</h1>
        <p>Select data file:</p>
        <button v-on:click="selectYear(2019)">2019</button>
        <button v-on:click="selectYear(2020)">2020</button>
        <button v-on:click="selectYear(2021)">2021</button>
        <button v-on:click="selectYear(2022)">2022</button>
        <button v-on:click="selectYear(2023)">2023</button>
      </div>
      <div v-if="chosenYear === 2019">
        <vault-2019/>
      </div>
      <div v-if="chosenYear === 2020">
        <vault-2020/>
      </div>
      <div v-if="chosenYear === 2021">
        <vault-2021/>
      </div>
      <div v-if="chosenYear === 2022">
        <vault-2022/>
      </div>
      <div v-if="chosenYear === 2023">
        <vault-2023/>
      </div>
    </div>
    <div v-else>
      <h1>Welcome to Vault Seven</h1>
      <p>To access the Vault, enter the secret of steel:</p>
      <input
        type="password"
        v-bind:class="{ wrongPassword: wrongPassword }"
        v-model="pw"
        autofocus="autofocus"
        onfocus="this.select()"
        v-on:keyup.enter="enterVault()"
      />
      <p>
        <button
          v-on:click="enterVault()"
          v-bind:class="{ validPassword: validPasswordEntered }"
        >
          ENTER THE VAULT
        </button>
      </p>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue';
import Vault2019 from './Vault2019.vue';
import Vault2020 from './Vault2020.vue';
import Vault2021 from './Vault2021.vue';
import Vault2022 from './Vault2022.vue';
import Vault2023 from './Vault2023.vue';

const vault = {
  components: {
    MainLayout,
    Vault2019,
    Vault2020,
    Vault2021,
    Vault2022,
    Vault2023,
  },
  methods: {
    selectYear(year) {
      this.chosenYear = year;
    },
    enterVault() {
      this.wrongPassword = !this.correctPassword();
      const self = this;
      setTimeout(() => {
        self.wrongPassword = false;
      }, 1500);
      this.enterButtonPressed = this.correctPassword();
    },
    correctPassword() {
      const normalizedPassword = this.pw.toLowerCase().trim();
      return this.hashCode(normalizedPassword) === -295629030
      || this.hashCode(normalizedPassword) === 386988864;
    },
    hashCode(str) {
      /* eslint no-bitwise: 0 */
      return str
        .split('')
        .reduce(
          (prevHash, currVal) => ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
          0,
        );
    },
  },
  data() {
    return {
      pw: '',
      enterButtonPressed: false,
      wrongPassword: false,
      chosenYear: null,
    };
  },
  computed: {
    hasAccess() {
      return this.enterButtonPressed && this.correctPassword();
    },
    validPasswordEntered() {
      return this.correctPassword();
    },
  },
};

export default vault;
</script>

<style scoped>
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
</style>
