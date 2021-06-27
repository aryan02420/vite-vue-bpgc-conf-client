<template>
  <div class="flex flex-row flex-wrap items-baseline w-auto gap-1">
    <a
      class="mr-1 text-sm hover:text-color-primary hover:underline"
      :href="channelURL"
      >#{{ channel }}</a
    >
    <a
      v-for="tag in tags"
      :key="tag"
      class="px-2 -mx-1 text-xs rounded-full hover:text-secondary"
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
