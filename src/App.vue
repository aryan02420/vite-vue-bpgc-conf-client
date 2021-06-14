<template>
  <router-view />
  <BottomNav
    class="fixed left-1/2 transform -translate-x-1/2 bottom-2"
    @click="store.commit('increment')"
  ></BottomNav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import BottomNav from '@/components/bottomNav.vue'

export default defineComponent({
  name: 'App',
  components: {
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
