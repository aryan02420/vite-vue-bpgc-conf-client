<template>
  <div class="max-w-lg mx-auto mb-3 -mt-5">
    <CellGroup title="Preferences">
      <Cell
        title="Theme"
        :value="store.getters.theme"
        @click="changeTheme"
        @keyup.enter="changeTheme"
        tabindex="0"
      />
    </CellGroup>
    <CellGroup title="About">
      <Cell title="Source Code" tabindex="0" />
      <Cell title="Privacy Policy" tabindex="0" />
      <Cell title="FAQ" tabindex="0" />
    </CellGroup>
    <CellGroup title="Build Info">
      <Cell title="Mode" :value="env" />
      <Cell title="SHA" :value="gh_sha.substr(0, 7)" />
      <Cell title="Ref" :value="gh_ref" />
      <Cell title="Release" value="0.0.0" />
    </CellGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cell from '@/components/cell.vue'
import CellGroup from '@/components/cellGroup.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Settings',
  components: {
    Cell,
    CellGroup,
  },
  data() {
    return {
      env: import.meta.env.MODE,
      gh_sha: import.meta.env.VITE_GITHUB_SHA,
      gh_ref: import.meta.env.VITE_GITHUB_REF,
    }
  },
  setup() {
    const store = useStore()
    return {
      store,
    }
  },
  methods: {
    changeTheme() {
      this.store.commit('changeTheme')
    },
  },
})
</script>

<style lang="postcss" scoped></style>
