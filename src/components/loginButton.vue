<template>
  <div
    v-if="!Auth.isAuthenticated.value"
    @click="login"
    class="text-inverted bg-opacity-100 rounded-md cursor-pointer bg-color-primary max-w-max focus-visible:ring-offset-white focus-visible:ring-offset-2"
    tabindex="0"
  >
    Login
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'Login',
  methods: {
    login() {
      try {
        this.Auth.loginWithRedirect()
      } catch (err) {
        console.error(err)
        this.Auth.logout()
      }
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
