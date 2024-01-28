<template>
  <li class="node">
      <span v-if="node.data != null"> {{ node.data }}</span>

    <ul v-if="this.childrenExist(node.children)">
      <Node v-for="children in node.children" :node="children"> </Node>
    </ul>
  </li>
</template>
<script>
export default {
  name: "Node",
  props: {
    node: {},
  },
  methods: {
    childrenExist(children) {
      return children && children.length;
    },
  },
};
</script>
