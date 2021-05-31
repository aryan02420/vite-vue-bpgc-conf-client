<template>
  <div class="flex flex-col bg-primary px-4 py-4 gap-4 shadow-sm rounded-md">
    <div class="flex flex-row items-center justify-between">
      <UserInfoSmall :username="username" :usercolor="usercolor" :imgsize="userimgsize" />
      <div class="flex flex-row items-center justify-end gap-2">
        <DateInfo :date="date"/>
        <span class="material-icons material-icons-round rounded-full hover:bg-gray-200 p-1 cursor-pointer">more_vert</span>
      </div>
    </div>
    <div class="mx-2">
      <slot></slot>
    </div>
    <div class="flex flex-row items-center gap-4">
      <VoteButton :voted="voted" :votes="numVotes" />
      <CommentButton :numComments="numComments" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import UserInfoSmall from '@/components/userInfoSmall.vue'
import VoteButton from '@/components/voteButtons.vue'
import CommentButton from '@/components/commentButton.vue'
import DateInfo from '@/components/dateInfo.vue'

interface IPostInfo {
  channel: string,
  tags: string[],
  voted?: number,
  numVotes: number,
  numComments: number,
  username: String
}

export default defineComponent({
  name: 'Container',
  components: {
    UserInfoSmall,
    VoteButton,
    CommentButton,
    DateInfo
  },
  props: {
    username: {
      type: String,
      required: false,
      default: "Anonymous"
    },
    usercolor: {
      type: String,
      required: false
    },
    userimgsize: {
      type: Number,
      required: false,
      default: 2
    },
    voted: {
      type: Number,
      required: false,
      default: 0
    },
    numVotes: {
      type: Number,
      required: false,
      default: 0
    },
    numComments: {
      type: Number,
      required: false,
      default: 0
    },
    date: {
      type: String,
      required: true
    },
    postInfo: {
      type: Object as PropType<IPostInfo>,
      required: false
    }
  },  
})
</script>

<style scoped>
</style>
