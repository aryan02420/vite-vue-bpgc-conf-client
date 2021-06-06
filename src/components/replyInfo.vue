<template>
  <div tabindex="0" @click="scrollToParent()" @keyup.enter="scrollToParent()"
    class="text-xs font-bold bg-action-normal bg-opacity-25 text-action-normal max-w-max px-1 py-0.5 rounded-full hover:bg-opacity-40 cursor-pointer select-none">
    @{{getUsername()}}
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

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
  setup() {
    const subcommentRefs = inject('subcommentRefs') as {[key: string]: any}
    return {
      subcommentRefs
    }
  },
  methods: {
    isInView(el:HTMLElement):boolean {
      const box = el.getBoundingClientRect();
      return box.bottom < window.innerHeight && box.top >= 0;
    },
    scrollToParent():void {
      let parentcom:HTMLElement = this.getParentComment().$el
      if (!this.isInView(parentcom)) {
        parentcom.scrollIntoView({
          behavior: 'smooth',
        })
      }
      parentcom.classList.add('animate-highlight')
      setTimeout(() => {
        parentcom.classList.remove('animate-highlight')
      }, 1000)
    },
    getParentComment():any {
      return this.subcommentRefs['c'+this.parentID]
    },
    getUsername():string {
      return this.getParentComment().postInfo.userName
    }
  },
  mounted() {
    this.$forceUpdate()
  }
})
</script>

<style scoped>
</style>