<template>
  <div
    tabindex="0"
    @click="$emit('clicked-event')"
    @keyup.enter="$emit('clicked-event')"
    class="flex flex-row items-center w-auto p-2 rounded-full gap-x-0 hover-effect"
  >
    <span
      v-if="!!icon"
      :class="['material-icons material-icons-round', { 'mr-1': !!text }]"
      >{{ icon }}</span
    >
    <span v-if="!!text" class="text-sm mr-0.5">{{ text }}</span>
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
      default: '',
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<style scoped></style>
