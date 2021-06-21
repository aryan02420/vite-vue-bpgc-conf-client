<template>
  <pre v-if="Auth.isAuthenticated.value" class="overflow-x-scroll">{{ JSON.stringify(Auth.user.value, null, 2) }}</pre>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'Profile',
  setup() {
    const Auth: any = inject('Auth')
    return {
      Auth,
    }
  },
})
</script>

<style lang="postcss" scoped></style>
