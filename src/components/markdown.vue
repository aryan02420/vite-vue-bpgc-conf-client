<template>
  <div :class="['markdown overflow-hidden h-auto text-secondary', {collapsed: _readmore}]" v-html="HTMLContent"></div>
  <div @click="expand" v-if="_readmore"
   class="px-2 mx-auto -mb-4 text-sm max-w-max cursor-pointer hover:bg-gray-200 hover:text-secondary rounded-full"
   >read more...</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Markdown',
  props: {
    rawContent: {
      type: String,
      required: true,
    },
    readMore: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    HTMLContent():string {
    return `<h1>${this.rawContent}</h1>`
    }
  },
  methods: {
    expand() {
      this._readmore = false
    }
  },
  setup(props) {
    return {
      _readmore: ref(props.readMore)
    }
  }
})
</script>

<style scoped lang="postcss">
.markdown.collapsed {
  @apply h-24;
}
</style>
