<template>
  <div
    v-if="!Auth.isAuthenticated.value"
    @click="login"
    class="px-4 py-2 bg-action-normal text-white max-w-max rounded-md cursor-pointer focus-visible:ring-offset-white focus-visible:ring-offset-2"
    tabindex="0"
  >
    Login
  </div>
  <div
    v-if="Auth.isAuthenticated.value"
    @click="logout"
    class="px-4 py-2 bg-action-danger text-white max-w-max rounded-md cursor-pointer focus-visible:ring-offset-white focus-visible:ring-offset-2"
    tabindex="0"
  >
    Logout
  </div>
  <pre v-if="Auth.isAuthenticated.value" class="overflow-x-scroll">{{ JSON.stringify(Auth.user.value, null, 2) }}</pre>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'Profile',
  inject: ['Auth'],
  methods: {
    login() {
      this.Auth.loginWithRedirect()
    },
    logout() {
      this.Auth.logout()
      this.$router.push({ path: '/' })
    },
  },
  setup() {
    const Auth: any = inject('Auth')
    return {
      Auth,
    }
  },
})
</script>

<style lang="postcss" scoped></style>
