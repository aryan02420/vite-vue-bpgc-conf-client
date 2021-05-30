<template>
  <div ref="content" @click.once="expand"
   :class="['markdown overflow-hidden h-auto text-secondary', { 'max-h-24 cursor-pointer': _readmore }]"
    v-html="HTMLContent"></div>
  <div @click.once="expand" v-if="_readmore"
   class="pt-24 -mt-24 text-sm cursor-pointer select-none"
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
  },
  mounted() {
    this.$nextTick(function (this:any) {
      this._readmore &&= (this.$refs.content.clientHeight >= 96)
    })
  },
})
</script>

<style scoped lang="postcss">
</style>
