<template>
  <div
    tabindex="0"
    @click="scrollToParent()"
    @keyup.enter="scrollToParent()"
    class="text-xs font-bold bg-color-primary bg-opacity-10 text-color-primary text-opacity-80 max-w-max px-1 py-0.5 rounded-full hover:bg-opacity-20 cursor-pointer select-none"
  >
    @{{ parentRef?.subcomment.username }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const TopBarHeight = 48
const BottomNavHeight = 64

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
      return box.bottom < window.innerHeight - BottomNavHeight && box.top >= TopBarHeight
    },
    scrollToParent(): void {
      if (!this.parentRef) return
      let parentcom: HTMLElement = this.parentRef.$el
      let scrollpos = parentcom.getBoundingClientRect().top + window.scrollY - TopBarHeight
      if (!this.isInView(parentcom)) {
        window.scrollTo({
          top: scrollpos,
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
