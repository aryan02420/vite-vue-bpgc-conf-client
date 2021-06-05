<template>
  <div tabindex="0" @click="$emit('clicked-event')" @keyup.enter="$emit('clicked-event')"
    class="flex flex-row items-center gap-x-0 w-auto rounded-full p-2 pr-2.5 hover-effect">
    <span v-if="!!icon" :class="['material-icons material-icons-round', {'mr-1':!!text}]">{{icon}}</span>
    <span v-if="!!text" class="text-sm">{{text}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SmallButton',
  emits: ['clicked-event'],
  props: {
    text: {
      type: [Number, String],
      required: false,
      default: ""
    },
    icon: {
      type: String,
      required: false,
      default: ""
    }
  }
})
</script>

<style scoped>
</style>
