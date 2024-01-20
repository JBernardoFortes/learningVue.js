<template>
  <div class="inputs">
    <div class="data">
      <input
        type="number"
        name="numberInput"
        id="inputNumber"
        class="input"
        placeholder="Type a number"
      />
      <button class="button" id="submit" @click="submitElement()">
        Submit
      </button>
      <button class="button" @click="getMin()">Minimum Value</button>
      <button class="button" @click="getMax()">Maximum Value</button>
      <button class="button" @click="getHeight()">Tree Height</button>
      <button class="button" @click="getSize()">Tree Size</button>
    </div>
    <div class="tranverse">
      <button class="button" @click="inOrderT()">In-Order Tranverse</button>
      <button class="button" @click="preOrderT()">Pre-Order Tranverse</button>
      <button class="button" @click="postOrderT()">Post-Order Tranverse</button>
      <button class="button" @click="levelOrderT()">
        Level-Order Tranverse
      </button>
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
        inputElement == 0
      ) {
        window.alert("Insira um valor válido");
        return;
      }
      document.getElementById("inputNumber").value = null;
      this.binaryTree.insert(inputElement);
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
  },
};
</script>
