<template>
  <div tabindex="0" @click="sendToggleCommentsEvent" @keyup.enter="sendToggleCommentsEvent"
    :class="['flex flex-row items-center gap-x-0 w-auto rounded-full pr-2 hover-effect', { 'text-action-normal': active }]">
    <span class="material-icons material-icons-round -mr-1">mode_comment</span>
    <span class="text-sm" >{{numComments}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CommentButton',
  emits: ['toggle-comments-event'],
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
  methods: {
    sendToggleCommentsEvent() {
      this.$emit('toggle-comments-event')
    }
  }
})
</script>

<style scoped>
</style>
