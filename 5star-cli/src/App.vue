<template>
  <!-- <header class="header">
    <h2>
      <span> 5 Star Rating</span>
    </h2>
  </header> -->
  <main class="main">
    <transition name="fade" mode="out-in">
      <div id="dataOutput" v-if="this.show" :key="this.show">
        <img
          :src="this.imageUrl"
          alt="image"
          id="dataImage"
          @load="changeBG()"
        />
        <h4>
          <span id="dataText"> {{ this.textOuput }}</span>
        </h4>
      </div>
    </transition>

    <Stars></Stars>
  </main>
  <footer class="footer">
    <Inputs @send-data="(data) => handleData(data)" v-if="showButtons"></Inputs>
  </footer>
  <img
    src="./assets/images/eyePNG.png"
    alt="OLHO"
    id="hideEye"
    @click="hideButtons()"
  />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Stars from "./components/Stars.vue";
import Inputs from "./components/Inputs.vue";
import ColorThief from "../node_modules/colorthief/dist/color-thief.mjs";
export default {
  name: "App",
  data() {
    return {
      show: false,
      imageUrl: "#  ",
      textOuput: null,
      showButtons: true,
    };
  },
  components: {
    Stars,
    Inputs,
  },
  methods: {
    handleData(data) {
      //Passou em arrow function no event handler pq nao tava recebendo o parametro direto
      let colors = [];
      console.log(data.image);
      console.log(colors);
      //Pegar as cores e a URL da imagem
      try {
        this.imageUrl = URL.createObjectURL(data.image);
      } catch (e) {
        window.alert("Insira uma imagem válida");
        return;
      }

      this.textOuput = data.title;
      this.show = true;
      // console.log(this.imageUrl);
    },
    hideButtons() {
      this.showButtons = !this.showButtons;
    },
    changeBG() {
      const thief = new ColorThief();
      const body = [...document.getElementsByTagName("body")][0];
      const outputText = document.getElementById("dataText");

      let palette = thief.getPalette(document.getElementById("dataImage"));
      let colors = [];

      palette.forEach((color, i) => {
        if (color[0] > 110 && i < 5) {
          return;
        }
        colors.push(color.join(","));
      });
      body.style.backgroundImage = `linear-gradient(to bottom, rgb(${colors[0]}),rgb(${colors[1]}))`;
      // body.style.backgroundColor = `rgb(${colors[0]})`
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
