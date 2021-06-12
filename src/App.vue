<template>
  <Feed />
  <BottomNav
    class="fixed w-lg bg-gray-100 bottom-2 rounded-full backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-300 shadow-lg p-4 text-center"
    @click="store.commit('increment')"
  ></BottomNav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import Feed from '@/components/feed.vue'
import BottomNav from '@/components/bottomNav.vue'

export default defineComponent({
  name: 'App',
  components: {
    Feed,
    BottomNav,
  },
  setup() {
    const store = useStore()
    console.log(store)
    return {
      store,
    }
  },
})
</script>

<style lang="postcss">
#app {
  font-family: 'Roboto', 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
}
</style>
