<template>
  <div
    class="flex flex-row items-center justify-between p-2 mb-4 border-b border-gray-300 shadow-sm backdrop-filter backdrop-blur-md bg-bluGry bg-opacity-40 text-primary"
  >
    <h1 class="text-2xl">
      BPGCC
    </h1>
    <div class="flex flex-row items-center justify-end gap-2 text-secondary">
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
    @apply bg-bluGry bg-opacity-90;
  }
}
</style>
