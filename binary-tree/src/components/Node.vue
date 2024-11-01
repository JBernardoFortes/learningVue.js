<template>
  <li class="node">
    <span v-if="node.data != null"> {{ node.data }}</span>
    <svg
      v-if="node.data != null"
      height="50"
      width="300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        v-if="
          node.data != null &&
          this.childrenExist(node.children) &&
          node.children[0] != 'null'
        "
        x1="0"
        y1="0"
        x2="300"
        y2="200"
        style="stroke: red; stroke-width: 2"
      />
      
    </svg>

    <svg
      v-if="node.data != null"
      height="50"
      width="300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        v-if="
          node.data != null &&
          this.childrenExist(node.children) &&
          node.children[1] != 'null'
        "
        x1="0"
        y1="0"
        x2="300"
        y2="200"
        style="stroke: red; stroke-width: 2"
      />
      
    </svg>
    
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
