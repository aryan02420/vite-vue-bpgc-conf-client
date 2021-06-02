<template>
  <div tabindex="0" @click="$emit('reply-event')" @keyup.enter="$emit('reply-event')"
    class="flex flex-row items-center gap-x-0 w-auto rounded-full hover:bg-gray-200 cursor-pointer pr-2">
    <span class="material-icons material-icons-round -mr-1">reply</span>
    <span class="text-sm" >reply</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ReplyButton',
  emits: ['reply-event'],
})
</script>

<style scoped>
</style>
