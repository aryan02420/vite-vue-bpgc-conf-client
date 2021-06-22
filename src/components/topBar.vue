<template>
  <div
    class="flex flex-row justify-between items-center mb-4 p-2 backdrop-filter backdrop-blur-md bg-blueGray-300 bg-opacity-40 border border-gray-300 shadow-sm text-primary"
  >
    <h1 class="text-2xl">
      BPGCC
    </h1>
    <div class="flex flex-row gap-2 items-center justify-end text-secondary">
      <span v-if="Auth.isAuthenticated.value">{{ Auth.user.value.email }}</span>
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
