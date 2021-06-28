<template>
  <div class="flex flex-col items-center self-center gap-5 p-12 text-center justify-centertext-center">
    <div class="text-8xl text-color-secondary">404</div>
    <div class="mb-32 text-5xl text-color-primary">Page Not Found</div>
    <router-link to="/" class="focus-visible:ring-offset-white focus-visible:ring-offset-2"><div class="w-auto px-4 py-2 text-inverted rounded-md bg-color-primary">Back to Home</div></router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound',
})
</script>
