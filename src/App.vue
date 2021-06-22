<template>
  <TopBar class="fixed left-0 right-0 top-0 z-10" />
  <router-view v-slot="{ Component }">
    <transition name="fade-down" mode="out-in">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
  <BottomNav class="fixed left-1/2 transform -translate-x-1/2 bottom-2 z-10" @click="getToken"></BottomNav>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useStore } from 'vuex'
import BottomNav from '@/components/bottomNav.vue'
import TopBar from '@/components/topBar.vue'

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
  setup() {
    const store = useStore()
    console.log(store)
    const Auth: any = inject('Auth')
    return {
      Auth,
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
  overflow: hidden;
}
a {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
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
