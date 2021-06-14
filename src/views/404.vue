<template>
  <div class="flex flex-col items-center self-center justify-centertext-center p-12 gap-5 text-center">
    <div class="text-8xl text-action-danger">404</div>
    <div class="text-5xl text-action-normal mb-32">Page Not Found</div>
    <router-link to="/" class="focus-visible:ring-offset-white focus-visible:ring-offset-2"><div class="px-4 py-2 bg-action-normal text-white w-auto rounded-md">Back to Home</div></router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound',
})
</script>
