<template>
  <div :class="['markdown overflow-hidden h-auto text-secondary', { 'max-h-24': _readmore }]" v-html="HTMLContent"></div>
  <div @click="expand" v-if="_readmore"
   class="px-2 ml-auto -mt-5 text-sm max-w-max cursor-pointer bg-primary hover:bg-gray-200 hover:text-secondary hover:rounded-full relative select-none"
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
</style>
