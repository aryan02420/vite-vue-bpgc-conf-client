<template>
  <div :class="['flex flex-row items-center gap-x-1 w-auto', { 'text-disabled': isUpvote || isDownvote }]">
    <span :class="['material-icons material-icons-round rounded-full hover:bg-gray-200 p-1 cursor-pointer', { 'text-action-normal': isUpvote }]" >arrow_upward</span>
    <span :class="['text-sm', { 'text-action-normal': isUpvote, 'text-action-danger': isDownvote }]" >{{votes}}</span>
    <span :class="['material-icons material-icons-round rounded-full hover:bg-gray-200 p-1 cursor-pointer', { 'text-action-danger': isDownvote }]" >arrow_downward</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VoteButton',
  props: {
    voted: {
      type: Number,
      required: false,
      default: 0
    },
    votes: {
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    isUpvote():Boolean {
      return (this.voted===1)
    },
    isDownvote():Boolean {
      return (this.voted===-1)
    },
  },
})
</script>

<style scoped>
</style>
