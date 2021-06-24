<template>
  <div>
    <div class="pt-6 pb-2 px-4">
      <h3 class="text-primary text-lg">{{ title }}</h3>
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
