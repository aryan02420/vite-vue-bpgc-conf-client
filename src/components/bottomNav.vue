<template>
  <div class="flex flex-row px-3 py-2 gap-2 rounded-full backdrop-filter backdrop-blur-md bg-blueGray-200 bg-opacity-40 border border-gray-300 shadow-lg text-xs">
    <router-link to="/" class="rounded-full"><span class="material-icons material-icons-round px-4 py-2 text-2xl hover-effect rounded-full leading-none">home</span></router-link>
    <router-link to="/search" class="rounded-full"><span class="material-icons material-icons-round px-4 py-2 text-2xl hover-effect rounded-full leading-none">search</span></router-link>
    <router-link to="/new" class="rounded-full"><span class="material-icons material-icons-round px-4 py-2 text-2xl hover-effect rounded-full leading-none">add_circle</span></router-link>
    <router-link to="/me" class="rounded-full"><span class="material-icons material-icons-round px-4 py-2 text-2xl hover-effect rounded-full leading-none">person</span></router-link>
    <router-link to="/settings" class="rounded-full"><span class="material-icons material-icons-round px-4 py-2 text-2xl hover-effect rounded-full leading-none">settings</span></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BottomNav',
})
</script>

<style lang="postcss" scoped>
@supports not (backdrop-filter: blur(1px)) {
  .backdrop-filter {
    @apply bg-blueGray-50 bg-opacity-90;
  }
}
.router-link-active {
  @apply text-action-danger bg-action-danger bg-opacity-10;
}
</style>
