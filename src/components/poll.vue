<template>
  <div :class="{ 'display-results': hasVoted }">
    <div
      v-for="(option, index) in filteredOptions"
      :key="index + 1"
      tabindex="0"
      :class="[
        'vote-bars relative py-2 px-4 my-1 text-secondary bg-gray-500 bg-opacity-0 text-sm rounded-md border border-gray-400 border-opacity-50 hover:bg-opacity-10 cursor-pointer flex flex-row justify-between items-center gap-1',
        { 'voted-this': voted === index + 1 },
      ]"
      :style="styleObj(option.votes)"
      @click="sendPollVote(index + 1)"
      @keyup.enter="sendPollVote(index + 1)"
    >
      <div class="truncate">{{ option.text }}</div>
      <div v-if="hasVoted" class="text-tertiary text-xs">
        {{ Math.floor(getPercentVotes(option.votes)) }}%
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface IPollOption {
  text: string
  votes: number
}

export default defineComponent({
  name: 'Poll',
  emits: ['clicked-event'],
  props: {
    options: {
      type: Array as PropType<IPollOption[]>,
      required: true,
    },
    voted: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  methods: {
    getPercentVotes(currentVotes: number): number {
      return (currentVotes / this.totalVotes) * 100
    },
    styleObj(index: number): any {
      return {
        '--vote-width': `${this.getPercentVotes(index)}%`,
      }
    },
    sendPollVote(optNo: number) {
      if (this.voted == optNo) {
        optNo = 0
      }
      this.$emit('clicked-event', optNo)
    },
  },
  computed: {
    filteredOptions(): any[] {
      return this.options.filter((option) => !!option)
    },
    totalVotes(): number {
      return this.filteredOptions.reduce((sum: number, value: IPollOption) => {
        return sum + value.votes
      }, 0)
    },
    hasVoted(): boolean {
      return this.voted > 0
    },
  },
})
</script>

<style scoped lang="postcss">
.vote-bars {
  z-index: 0;
}
.display-results .vote-bars::before {
  position: absolute;
  content: '';
  @apply rounded-md m-0.5 inset-0;
  width: calc(var(--vote-width) - 0.25rem);
  @apply bg-gray-400 bg-opacity-30;
  z-index: -1;
}
.display-results .vote-bars.voted-this {
  @apply border-action-normal;
}
.display-results .vote-bars.voted-this * {
  @apply text-action-normal;
}
.display-results .vote-bars.voted-this::before {
  @apply bg-action-normal bg-opacity-25;
}
</style>
