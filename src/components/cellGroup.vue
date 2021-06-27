<template>
  <div>
    <div class="px-4 pt-6 pb-2">
      <h3 class="text-lg text-primary">{{ title }}</h3>
    </div>
    <div class="space-y-0.5">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CellGroup',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
