<template>
  <input type="file" name="image" id="imageInput" @change="readFiles()" />
  <label for="imageInput" class="inputLabel"> Select File</label>
  <input type="text" name="text" id="textInput" placeholder="Type The Title" />
  <button class="button" id="update" @click="update()">Update</button>
  <button class="button" id="hide">Hide</button>
  
</template>
<script>
export default {
  name: "Inputs.vue",
  emits: ["send-data"],
  data() {
    return {
      image: null,
    };
  },

  methods: {
    readFiles() {
      const input = document.getElementById("imageInput");
      let image = input.files[0];

      this.image = image;
    },
    update() {
      let data = {
        image: this.image,
        imageTag: document.getElementById("imageInput"),
        title: document.getElementById("textInput").value,
      };
      this.$emit("send-data", data);
    },
  },
};
</script>
