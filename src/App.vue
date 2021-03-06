<template>
  <TopBar
    class="fixed top-0 left-0 right-0 z-10 duration-1000 ease-out"
    :style="{
      top: `${scrollNormPos > 0 ? (scrollNormPos < 200 ? -1 * scrollNormPos : -200) : 0}px`,
    }"
  />
  <router-view v-slot="{ Component }">
    <transition name="fade-down" mode="out-in">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
  <BottomNav
    class="fixed bottom-0 z-10 mb-2 duration-1000 ease-out transform -translate-x-1/2 left-1/2"
    :style="{
      bottom: `${scrollNormPos > 96 ? (scrollNormPos < 200 ? -1 * (scrollNormPos - 96) : -200) : 0}px`,
    }"
  />
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import { useStore } from 'vuex'
import BottomNav from '@/components/bottomNav.vue'
import TopBar from '@/components/topBar.vue'
import { throttle } from 'throttle-debounce'

export default defineComponent({
  name: 'App',
  components: {
    BottomNav,
    TopBar,
  },
  methods: {
    async getToken() {
      if (!this.Auth.isAuthenticated.value) return
      let token = await this.Auth.getTokenSilently()
      token = JSON.parse(window.atob(token.split('.')[1]))
      console.log(token)
    },
  },
  created() {
    document.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.onScroll)
  },
  setup() {
    const store = useStore()
    console.log(store)
    const Auth: any = inject('Auth')
    const scrollPos = {
      curr: 0,
      prev: 0,
      pivot: 0,
      dir: 1,
    }
    let scrollNormPos = ref(0)
    const _onscroll = function () {
      let curr = window.scrollY
      let prev = scrollPos.curr
      let dir = Math.sign(curr - prev)
      if (
        dir !== scrollPos.dir ||
        curr < 64 ||
        window.scrollY + window.innerHeight >
          document.documentElement.scrollHeight - 96
      ) {
        scrollPos.pivot = curr
      }
      scrollNormPos.value = curr - scrollPos.pivot
      scrollPos.prev = scrollPos.curr
      scrollPos.curr = curr
      scrollPos.dir = dir
    }
    const onScroll = throttle(250, false, _onscroll)
    return {
      Auth,
      store,
      onScroll,
      scrollNormPos,
    }
  },
})
</script>

<style lang="postcss">
#app {
  font-family: 'Atkinson Hyperlegible', 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.fade-down-enter-active,
.fade-down-leave-active {
  transition: opacity 200ms ease-out;
}
.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
}
</style>
