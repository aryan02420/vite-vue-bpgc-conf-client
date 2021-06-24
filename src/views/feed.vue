<template>
  <div class="flex flex-col gap-4 max-w-lg mx-auto mb-3">
    <Post v-for="post in store.state.data" :key="post.id" tabindex="1" :post="post" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, provide } from 'vue'
import { useStore } from 'vuex'
import Post from '@/components/post.vue'

export default defineComponent({
  name: 'Feed',
  components: {
    Post,
  },
  setup() {
    const store = useStore()
    return {
      store,
    }
  },
})
</script>

<style lang="postcss" scoped></style>
