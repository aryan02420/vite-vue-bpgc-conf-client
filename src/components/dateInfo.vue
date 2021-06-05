<template>
  <span class="text-sm">{{dateToString}}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DateInfo',
  props: {
    date: {
      type: Number,
      required: true,
    },
  },
  computed: {
    dateToString():string {
      return new Date(this.date).toDateString()
    }
  }
})
</script>

<style scoped>
</style>
