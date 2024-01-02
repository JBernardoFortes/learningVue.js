<template>
   <div v-if='show'>
      <h1>
         First vue component
      </h1>
      <slot></slot>
      <slot name="customSlot"></slot>
      <button @click='hideComp()'>
         hide slot components
      </button>
   </div>
</template>

<script>
export default {
   name: 'Modal'
   , props: ['show'],
   methods: {
      hideComp() {
         this.$emit('hide');
      }
   }
}
</script>