<template>
  <div class="px-8 py-3 rounded-md shadow-sm bg-primary">
    <div class="flex flex-row items-center justify-between">
      <h4 class="text-primary text-md">{{ title }}</h4>
      <h6 v-if="value" class="text-sm text-secondary">{{ value }}</h6>
    </div>
    <div v-if="description" class="text-sm">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cell',
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>
