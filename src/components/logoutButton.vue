<template>
  <div
    v-if="Auth.isAuthenticated.value"
    @click="logout"
    class="text-white bg-opacity-100 rounded-md cursor-pointer bg-color-secondary max-w-max focus-visible:ring-offset-white focus-visible:ring-offset-2"
    tabindex="0"
  >
    Logout
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'Logout',
  methods: {
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
