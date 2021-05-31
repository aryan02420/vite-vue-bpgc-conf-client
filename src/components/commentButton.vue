<template>
  <div class="flex flex-row items-center gap-x-1 w-auto">
    <span :class="['material-icons material-icons-round rounded-full hover:bg-gray-200 p-1 cursor-pointer', { 'text-action-normal': active }]" >mode_comment</span>
    <span :class="['text-sm', { 'text-action-normal': active }]" >{{numComments}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CommentButton',
  props: {
    numComments: {
      type: Number,
      required: false,
      default: 0
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
  },
})
</script>

<style scoped>
</style>
