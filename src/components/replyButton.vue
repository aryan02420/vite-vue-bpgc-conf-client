<template>
  <div tabindex="0" @click="sendReplyEvent" @keyup.enter="sendReplyEvent"
    class="flex flex-row items-center gap-x-0 w-auto rounded-full pr-2 hover-effect">
    <span class="material-icons material-icons-round -mr-1">reply</span>
    <span class="text-sm" >reply</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ReplyButton',
  emits: ['reply-event'],
  methods: {
    sendReplyEvent() {
      this.$emit('reply-event')
    }
  }
})
</script>

<style scoped>
</style>
