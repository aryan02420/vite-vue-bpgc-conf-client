<template>
  <div
    class="flex flex-row justify-between items-center mb-4 p-2 backdrop-filter backdrop-blur-md bg-blueGray-300 bg-opacity-40 border border-gray-300 shadow-sm"
  >
    <div>
      {{ env }}
    </div>
    <div class="flex flex-row gap-2 items-center justify-end">
      <span v-if="Auth.isAuthenticated.value">{{ Auth.user.value.sub.split('|')[1] }}</span>
      <Login class="px-2 py-1" />
      <Logout class="px-2 py-1" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import Login from '@/components/loginButton.vue'
import Logout from '@/components/logoutButton.vue'
export default defineComponent({
  name: 'TopBar',
  components: {
    Login,
    Logout,
  },
  data() {
    return {
      env: import.meta.env.MODE,
    }
  },
  setup() {
    const Auth: any = inject('Auth')
    return {
      Auth,
    }
  },
})
</script>

<style lang="postcss" scoped>
@supports not (backdrop-filter: blur(1px)) {
  .backdrop-filter {
    @apply bg-blueGray-100 bg-opacity-90;
  }
}
</style>
