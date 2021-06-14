<template>
  <div class="flex flex-row">
    <div v-if="!Auth.isAuthenticated.value" @click="login" class="hover-effect p-2 rounded-full">Login</div>
    <div v-if="Auth.isAuthenticated.value || true" @click="logout" class="hover-effect p-2 rounded-full">Logout</div>
    <div v-if="Auth.isAuthenticated.value">{{ Auth.user.value }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'BottomNav',
  inject: ['Auth'],
  props: {},
  computed: {},
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

<style scoped></style>
