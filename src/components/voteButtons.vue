<template>
  <div :class="['flex flex-row items-center gap-x-0 w-auto rounded-full hover-effect', { 'text-disabled': isUpvote || isDownvote }]">
    <span tabindex="0"
      :class="['material-icons material-icons-round rounded-full hover-effect', { 'text-action-normal': isUpvote }]"
      >arrow_upward</span>
    <span :class="['text-sm -mb-0.5', { 'text-action-normal': isUpvote, 'text-action-danger': isDownvote }]" >{{votes}}</span>
    <span tabindex="0"
      :class="['material-icons material-icons-round rounded-full hover-effect', { 'text-action-danger': isDownvote }]"
      >arrow_downward</span>
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
