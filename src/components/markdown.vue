<template>
  <div>
    <div
      ref="content"
      @click.once="expand"
      :class="['markdown overflow-hidden h-auto text-secondary', { 'max-h-24 cursor-pointer': readmore }]"
      v-html="HTMLContent"
    ></div>
    <div
      @click="expand"
      @keyup.enter="expand"
      v-if="readmore"
      tabindex="0"
      class="text-sm cursor-pointer select-none max-w-max -mt-0.5"
    >
      read more...
    </div>
  </div>
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
  setup(props) {
    return {
      readmore: ref(props.readMore)
    }
  },
  mounted() {
    this.$nextTick(function (this:any) {
      this.readmore &&= (this.$refs.content.scrollHeight > 96)
    })
  },
  methods: {
    expand() {
      this.readmore = false
    }
  },
})
</script>

<style scoped lang="postcss"></style>
