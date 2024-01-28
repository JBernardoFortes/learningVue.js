<template>
  <div class="inputs">
    <div class="data">
      <input
        type="number"
        name="numberInput"
        id="inputNumber"
        class="input"
        placeholder="Digite um numero"
        @keyup.enter="submitElement()"
      />
      <button class="button" id="submit" @click="submitElement()">
        Enviar
      </button>
      <button class="button" @click="getMin()">Valor Minimo</button>
      <button class="button" @click="getMax()">Valor Maximo</button>
      <button class="button" @click="getHeight()">Altura da Arvore</button>
      <button class="button" @click="getSize()">Tamanho da Arvore</button>
      <button class="button" @click="getLength()">Comprimento Interno</button>
    </div>
    <div class="tranverse">
      <button class="button" @click="inOrderT()">Percurso Em-Ordem</button>
      <button class="button" @click="preOrderT()">Percurso Pre-Ordem</button>
      <button class="button" @click="postOrderT()">Percurso Pos-Ordem</button>
      <button class="button" @click="levelOrderT()">Percurso por Nivel (LevelOrder)</button>
      <button class="button" @click="isBalanced()">Arvore Balanceada?</button>
    </div>
  </div>
</template>
<script>
import BinaryTree from "../assets/modules/BST.js";
export default {
  name: "Inputs",
  emits: [
    "minData",
    "maxData",
    "heightData",
    "sizeData",
    "inOrderData",
    "preOrderData",
    "postOrderData",
    "levelOrderData",
    "isBalancedData",
    "lengthData",
    "treeFeedback",
  ],
  data() {
    return {
      binaryTree: null,
      data: [],
    };
  },
  methods: {
    submitElement() {
      if (this.binaryTree == null) {
        this.binaryTree = new BinaryTree();
      }
      const inputElement = Number(document.getElementById("inputNumber").value);
      if (
        inputElement == null ||
        inputElement == undefined || 
        document.getElementById("inputNumber").value.length == 0)
      {
        window.alert("Insira um valor válido");
        return;
      }
      if (this.binaryTree.contains(inputElement)) {
        window.alert("Valor já inserido");
        return;
      }

      document.getElementById("inputNumber").value = null;
      this.binaryTree.insert(inputElement);
      this.$emit("treeFeedback", this.binaryTree);
    },
    getMin() {
      try {
        if (this.binaryTree.root == null) {
          window.alert("Árvore vazia");
          return;
        }
      } catch {
        window.alert("Árvore vazia");
        return;
      }
      let min = this.binaryTree.min();
      this.data = [];
      this.data.push(min);
      this.$emit("minData", this.data[0].data);
    },
    getMax() {
      try {
        if (this.binaryTree.root == null) {
          window.alert("Árvore vazia");
          return;
        }
      } catch {
        window.alert("Árvore vazia");
        return;
      }
      let max = this.binaryTree.max();
      this.data = [];
      this.data.push(max);
      this.$emit("maxData", this.data[0].data);
    },
    getHeight() {
      try {
        if (this.binaryTree.root == null) {
          window.alert("Árvore vazia");
          return;
        }
      } catch {
        window.alert("Árvore vazia");
        return;
      }
      let height = this.binaryTree.height();
      this.data = [];
      this.data.push(height);
      this.$emit("heightData", this.data[0]);
    },
    getSize() {
      try {
        if (this.binaryTree.root == null) {
          window.alert("Árvore vazia");
          return;
        }
      } catch {
        window.alert("Árvore vazia");
        return;
      }
      let size = this.binaryTree.size();
      this.data = [];
      this.data.push(size);

      this.$emit("sizeData", Number(this.data));
    },
    inOrderT() {
      try {
        if (this.binaryTree.root == null) {
          window.alert("Árvore vazia");
          return;
        }
      } catch {
        window.alert("Árvore vazia");
        return;
      }
      this.data = [];
      this.binaryTree.inOrderTranverse((data) => {
        this.data.push(data.data);
      });
      this.$emit("inOrderData", this.data);
    },
    preOrderT() {
      try {
        if (this.binaryTree.root == null) {
          window.alert("Árvore vazia");
          return;
        }
      } catch {
        window.alert("Árvore vazia");
        return;
      }
      this.data = [];
      this.binaryTree.preOrderTranverse((data) => {
        this.data.push(data.data);
      });
      this.$emit("preOrderData", this.data);
    },
    postOrderT() {
      try {
        if (this.binaryTree.root == null) {
          window.alert("Árvore vazia");
          return;
        }
      } catch {
        window.alert("Árvore vazia");
        return;
      }
      this.data = [];
      this.binaryTree.postOrderTranverse((data) => {
        this.data.push(data.data);
      });
      this.$emit("postOrderData", this.data);
    },
    levelOrderT() {
      try {
        if (this.binaryTree.root == null) {
          window.alert("Árvore vazia");
          return;
        }
      } catch {
        window.alert("Árvore vazia");
        return;
      }
      this.data = [];
      this.binaryTree.levelOrderTranverse((data) => {
        this.data.push(data.data);
      });
      this.$emit("levelOrderData", this.data);
    },
    isBalanced() {
      try {
        if (this.binaryTree.root == null) {
          window.alert("Árvore vazia");
          return;
        }
      } catch {
        window.alert("Árvore vazia");
        return;
      }
      let isBalanced = this.binaryTree.isBalanced();
      this.$emit("isBalancedData", isBalanced > 0);
    },
    getLength() {
      try {
        if (this.binaryTree.root == null) {
          window.alert("Árvore vazia");
          return;
        }
      } catch {
        window.alert("Árvore vazia");
        return;
      }
      this.data = [];
      this.data.push(this.binaryTree.internalLength());
      this.$emit("lengthData", this.data[0]);
    },
    
  },
};
</script>
