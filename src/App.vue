<template>
  <header class="header">
    <h2>
      <span> 5 Star Rating</span>
    </h2>
  </header>
  <main class="main">
    <Stars></Stars>
  </main>
  <footer class="footer">
    <Inputs></Inputs>
  </footer>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Stars from "./components/Stars.vue";
import Inputs from "./components/Inputs.vue";
export default {
  name: "App",
  components: {
    Stars,
    Inputs,
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
