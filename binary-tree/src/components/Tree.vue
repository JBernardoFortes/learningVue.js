<template>
  <div class="treeContainer">
    <ul class="binaryTreeList">
      <Node v-if="root" :node="root"> </Node>
    </ul>
  </div>
</template>
<script>
import Node from "./Node.vue";
export default {
  name: "tree",
  props: {
    root: {},
  },
  components: {
    Node,
  },
};
</script>
