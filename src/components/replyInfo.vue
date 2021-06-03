<template>
  <div tabindex="0" @click="scrollToParent()" @keyup.enter="scrollToParent()"
    class="text-xs font-bold bg-action-normal bg-opacity-25 text-action-normal max-w-max px-1 py-0.5 rounded-full hover:bg-opacity-40 cursor-pointer select-none">
    @{{getUsername()}}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'ReplyInfo',
  props: {
    parentID: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      parentComment: null
    }
  },
  methods: {
    scrollToParent():void {
      this.getParentComment()?.scrollIntoView({
        behavior: 'smooth'
      })
      this.getParentComment().classList.add('spin-slow')
    },
    getParentComment():HTMLElement|null|any {
      return document.getElementById(this.parentID)
    },
    getUsername():string {
      return this.getParentComment()?.querySelector('[data-username]')?.innerText
    }
  },
  mounted() {
    this.$forceUpdate()
  }
})
</script>

<style scoped>
</style>