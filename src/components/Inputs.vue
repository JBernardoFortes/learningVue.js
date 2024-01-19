<template>
  <input type="file" name="image" id="imageInput" />
  <label for="imageInput" class="inputLabel"> Select File</label>
  <input type="text" name="text" id="textInput" placeholder="Type The Title" />
  <button class="button">Update</button>
  <button class="button">Hide</button>
</template>
<script>
export default {
  name: "Inputs.vue",
};
</script>
