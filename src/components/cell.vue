<template>
  <div class="py-3 px-8 bg-primary shadow-sm rounded-md">
    <div class="flex flex-row justify-between items-center">
      <h4 class="text-primary text-md">{{ title }}</h4>
      <h6 v-if="value" class="text-secondary text-sm">{{ value }}</h6>
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
