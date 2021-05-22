<template>
  <span class="text-sm">{{date}}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DateInfo',
  props: {
    date: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
</style>
