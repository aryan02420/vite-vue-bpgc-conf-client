<template>
  <div :class="{'display-results': hasVoted}">
    <div v-for="(option, index) in options" :key="index+1" tabindex="0"
      :class="['vote-bars relative p-2 my-1 bg-action-normal bg-opacity-0 text-action-normal rounded-md border border-action-normal border-opacity-20 hover:bg-opacity-5 cursor-pointer select-none truncate', {'voted-this': voted === index+1}]"
      :style="styleObj(option.votes)"
      @click="sendPollVote(index+1)" @keyup.enter="sendPollVote(index+1)" 
      >{{voted === index+1 ? '\u203a ' : ''}}{{option.text}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface IPollOption {
  text: string,
  votes: number
}

export default defineComponent({
  name: 'Poll',
  emits: ['clicked-event'],
  props: {
    options: {
      type: Array as PropType<IPollOption[]>,
      required: true
    },
    voted: {
      type: Number,
      required: false,
      default: 0
    }
  },
  methods: {
    getPercentVotes(currentVotes: number): number {
      return currentVotes / this.totalVotes * 100
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
    }
  },
  computed: {
    totalVotes():number {
      return this.options.reduce((sum:number, value:IPollOption) => { return sum + value.votes }, 0)
    },
    hasVoted():boolean {
      return this.voted > 0
    }
  }
})
</script>

<style scoped lang="postcss">
.display-results .vote-bars.voted-this {
  @apply border-opacity-60
}
.display-results .vote-bars::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: var(--vote-width);
  @apply bg-action-normal bg-opacity-10;
}
.display-results .vote-bars.voted-this::before {
  @apply bg-opacity-20;
}
</style>