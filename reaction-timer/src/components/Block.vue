<template>
  <div class="block" v-if="this.showBlock" @click="close()">Click Me</div>
</template>

<script>
export default {
  name: "Block",
  props: ["delay"],
  emits: ["close"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  beforeMount() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    close() {
      this.showBlock = false;
      this.stopTimer();
      this.$emit("close", this.reactionTime);
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
  },
};
</script>
<style>
.block {
  width: 450px;
  border-radius: 20px;
  background-color: yellow;
  color: #444;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
  cursor: pointer;
}
</style>
