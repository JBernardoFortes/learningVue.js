<template>
  <div class="modalContainer" @click.self="hideMessage()">
    <div class="modalBox" :class="{ sale: theme == 'sale' }">
      <slot></slot>
      <slot name="links"></slot>
      <slot name="buttons"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Message",
  props: ["theme"],
  methods: {
    hideMessage() {
      this.$emit("hide");
    },
  },
};
</script>
<style>
.modalBox {
  background-color: rgb(65, 65, 65);
  color: aliceblue;
}
.sale {
  background-color: crimson;
  color: aliceblue;
}
.sale a:hover {
  background-color: aliceblue;
  color: crimson;
}
.sale .inputModal {
  background-color: crimson;
  color: aliceblue;
}
.sale .inputModal::placeholder {
  color: aliceblue;
  opacity: 0.4;
}
.sale .inputModal:hover,
.sale .inputModal:focus {
  background-color: #ffcccc;
  color: crimson;
}
/* .sale .inputModal:focus {
  background-color: #ffcccc;
  color: crimson;
} */
.sale .button { 
  background-color: crimson;
  color: aliceblue;
}
.sale .button:hover { 
  color: crimson;
}

</style>
