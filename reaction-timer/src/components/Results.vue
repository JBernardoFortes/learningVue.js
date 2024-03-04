<template>
  <Transition name="fade" mode="out-in">
    <h3 :key="this.reactionTime">{{ this.reactionTime }} milissegundos</h3>
  </Transition>
</template>
<script>
export default {
  name: "Results",
  props: ["reactionTime"],
};
</script>
<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease, transform 0.2s ease;
}
</style>
