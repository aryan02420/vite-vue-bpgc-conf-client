<template>
  <div
    v-if="Auth.isAuthenticated.value"
    @click="logout"
    class="bg-action-danger text-white max-w-max rounded-md cursor-pointer focus-visible:ring-offset-white focus-visible:ring-offset-2"
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
