<template>
  <div
    tabindex="0"
    @click="scrollToParent()"
    @keyup.enter="scrollToParent()"
    class="text-xs font-bold bg-action-normal bg-opacity-10 text-action-normal text-opacity-80 max-w-max px-1 py-0.5 rounded-full hover:bg-opacity-20 cursor-pointer select-none"
  >
    @{{ parentRef?.subcomment.username }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ReplyInfo',
  props: {
    parentRef: {
      type: Object,
      required: false,
    },
  },
  methods: {
    isInView(el: HTMLElement): boolean {
      const box = el.getBoundingClientRect()
      return box.bottom + 64 < window.innerHeight && box.top >= 0 + 48
    },
    scrollToParent(): void {
      if (!this.parentRef) return
      let parentcom: HTMLElement = this.parentRef.$el
      if (!this.isInView(parentcom)) {
        parentcom.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth',
        })
      }
      parentcom.classList.add('animate-highlight')
      setTimeout(() => {
        parentcom.classList.remove('animate-highlight')
      }, 1200)
    },
  },
})
</script>

<style scoped></style>
