<template>
  <div class="flex flex-col bg-primary px-4 py-4 gap-4 shadow-sm rounded-md">
    <div class="flex flex-row items-center justify-between">
      <UserInfoSmall :username="'redsus'" :usercolor="'brown'" :imgsize="2" :online="true"/>
      <div class="flex flex-row items-center justify-end gap-2">
        <DateInfo date="20 may"/>
        <span class="material-icons material-icons-round rounded-full hover:bg-gray-200 p-1 cursor-pointer">more_vert</span>
      </div>
    </div>
    <div class="mx-2">
      <div class="flex flex-row flex-wrap gap-1 items-baseline w-auto">
        <a class="text-sm hover:text-blue-400 hover:underline mr-3" :href="channelURL">#{{channel}}</a>
        <a v-for="tag in tags" :key="tag"
        class="text-xs hover:bg-gray-200 hover:text-secondary px-2 rounded-full"
        :href="tagUrl(tag)">{{tag}}</a>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
    <div class="flex flex-row items-center gap-4">
      <VoteButton :voted="-1" />
      <CommentButton :numComments="12" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import UserInfoSmall from '@/components/userInfoSmall.vue'
import VoteButton from '@/components/voteButtons.vue'
import CommentButton from '@/components/commentButton.vue'
import DateInfo from '@/components/dateInfo.vue'

export default defineComponent({
  name: 'Post',
  components: {
    UserInfoSmall,
    VoteButton,
    CommentButton,
    DateInfo
  },
  props: {
    channel: {
      type: String,
      required: true,
    },
    tags: {
      type: Array as PropType<string[]>,
      default: () => []
    },
  },
  computed: {
    channelURL():string {
      return `/channel/${this.channel}`
    },
  },
  methods: {
    tagUrl(tag:string):string {
      return `/tag/${tag}`
    }
  }

  
})
</script>

<style scoped>
</style>
