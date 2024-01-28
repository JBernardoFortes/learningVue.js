<template>
  <header class="header">
    <h1><span id="border"> Arvore Binaria de Busca</span></h1>
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
      @isBalancedData="(data) => handleIsBalancedData(data)"
      @lengthData="(data) => handleLengthData(data)"
      @treeFeedback="(data) => handleTreeFeedback(data)"
    ></Inputs>
  </main>
  <div class='outputContainerWrapper'>
    <div class="outputContainer" v-if="this.show">
      <transition mode="out-in" name="fade">
        <h2 :key="type">
          {{ type }}
        </h2>
      </transition>

      <transition name="fade" mode="out-in">
        <ul class="outputList" :key="this.data">
          <li v-for="num in this.data" class="outputItem">
            <h2>
              <span>
                {{ num }}
                <span v-if="num != this.data[this.data.length - 1]">
                  ->
                </span></span
              >
            </h2>
          </li>
        </ul>
      </transition>
    </div>
  </div>

  <transition name="fade" mode="out-in">
    <Tree
      :root="this.binaryTree.root"
      v-if="showTree"
      :key="this.showTree"
    ></Tree>
  </transition>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Inputs from "./components/Inputs.vue";
import Tree from "./components/Tree.vue";
import Node from "./components/Node.vue";
export default {
  name: "App",
  components: {
    Inputs,
    Tree,
    Node,
  },
  data() {
    return {
      data: [],
      type: "",
      show: false,
      showTree: false,
      binaryTree: {},
    };
  },
  methods: {
    handleMin(data) {
      this.data = [data];
      this.type = "Valor Minimo ";
      this.show = true;
    },
    handleMax(data) {
      this.data = [data];
      this.type = "Valor Maximo ";
      this.show = true;
    },
    handleHeight(data) {
      this.data = [data];
      this.type = "Altura da Arvore ";
      this.show = true;
    },
    handleSize(data) {
      this.data = [data];
      this.type = "Tamanho da Arvore ";
      this.show = true;
    },
    handleInOrderData(data) {
      this.data = [];
      data.forEach((data) => {
        this.data.push(data);
      });
      this.type = "Percurso Em-Ordem ";
      this.show = true;
    },
    handlePreOrderData(data) {
      this.data = [];
      data.forEach((data) => {
        this.data.push(data);
      });
      this.type = "Percurso Pre-Ordem ";
      this.show = true;
    },
    handlePostOrderData(data) {
      this.data = [];
      data.forEach((data) => {
        this.data.push(data);
      });
      this.type = "Percurso Pos-Ordem ";
      this.show = true;
    },
    handleLevelOrderData(data) {
      this.data = [];
      data.forEach((data) => {
        this.data.push(data);
      });
      this.type = "Percurso por Nivel (LevelOrder) ";
      this.show = true;
    },
    handleIsBalancedData(data) {
      this.data = [];

      if (data) {
        this.data.push("A arvore esta balanceada");
      } else {
        this.data.push("A arvore nao esta balanceada");
      }

      this.type = "";
      this.show = true;
    },
    handleLengthData(data) {
      this.data = [data];
      this.type = "Comprimento Interno";
      this.show = true;
    },
    handleTreeFeedback(data) {
      this.binaryTree = data;
      this.showTree = true;
    },
    showTreeC() {
      this.showTree = true;
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
}
</style>
