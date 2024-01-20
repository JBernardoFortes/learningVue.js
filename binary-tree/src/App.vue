<template>
  <header class="header">
    <h1><span id="border"> Binary Tree</span></h1>
  </header>
  <main class="mainContainer">
    <Inputs
      @minData="(data) => handleMin(data)"
      @maxData="(data) => handleMax(data)"
      @heightData="(data) => handleHeight(data)"
      @sizeData="(data) => handleSize(data)"
      @inOrderData="(data) => handleInOrderData(data)"
      @preOrderData="(data) => handlePreOrderData(data)"
      @postOrderData="(data) => handlePostOrderData(data)"
      @levelOrderData="(data) => handleLevelOrderData(data)"
    ></Inputs>
  </main>
  <div class="outputContainer">
    <ul class="outputList">
      <li v-for="num in this.data" class="outputItem">
        <span> {{ num }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Inputs from "./components/Inputs.vue";
export default {
  name: "App",
  components: {
    Inputs,
  },
  data() {
    return {
      data: [0, 1, 2, 3],
    };
  },
  methods: {
    handleMin(data) {
      this.data = [data];
    },
    handleMax(data) {
      this.data = [data];
    },
    handleHeight(data) {
      this.data = [data];
    },
    handleSize(data) {
      this.data = [data];
    },
    handleInOrderData(data) {
      this.data = [];
      data.forEach((data) => {
        this.data.push(data);
      });
    },
    handlePreOrderData(data) {
      this.data = [];
      data.forEach((data) => {
        this.data.push(data);
      });
    },
    handlePostOrderData(data) {
      this.data = [];
      data.forEach((data) => {
        this.data.push(data);
      });
    },
    handleLevelOrderData(data) {
      this.data = [];
      data.forEach((data) => {
        this.data.push(data);
      });
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
