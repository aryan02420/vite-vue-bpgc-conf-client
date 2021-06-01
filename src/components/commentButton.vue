<template>
  <div tabindex="0" :class="['flex flex-row items-center gap-x-0 w-auto rounded-full hover:bg-gray-200 cursor-pointer pr-2', { 'text-action-normal': active }]">
    <span class="material-icons material-icons-round -mr-1"
      >mode_comment</span>
    <span class="text-sm -mb-0.5" >{{numComments}}</span>
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
      default: Math.random()>0.5
    }
  },
  computed: {
  },
})
</script>

<style scoped>
</style>
