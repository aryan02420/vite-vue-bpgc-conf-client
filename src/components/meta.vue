<template>
  <div class="flex flex-row flex-wrap gap-1 items-baseline w-auto">
    <a
      class="text-sm hover:text-action-normal hover:underline mr-1"
      :href="channelURL"
      >#{{ channel }}</a
    >
    <a
      v-for="tag in tags"
      :key="tag"
      class="text-xs hover:text-secondary px-2 -mx-1 rounded-full"
      :href="tagUrl(tag)"
      >{{ tag }}</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Meta',
  props: {
    channel: {
      type: String,
      required: true,
    },
    tags: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  computed: {
    channelURL(): string {
      return `/channel/${this.channel}`
    },
  },
  methods: {
    tagUrl(tag: string): string {
      return `/tag/${tag}`
    },
  },
})
</script>

<style scoped></style>
