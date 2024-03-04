<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1>Reaction Timer</h1>

  <button @click="start()" :disabled="this.isPlaying">Play</button>
  <Results :reactionTime="this.reactionTime"> </Results>
  <Block
    :delay="this.delay"
    v-if="this.isPlaying == true"
    @close="(time) => handleTime(time)"
  ></Block>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";

export default {
  name: "App",
  components: { Block, Results },
  data() {
    return {
      reactionTime: 0,
      isPlaying: false,
      delay: null,
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 5000;
    },
    handleTime(time) {
      this.reactionTime = time;
      this.isPlaying = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
