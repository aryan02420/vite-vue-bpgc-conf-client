<template>
  <div class="overflow-hidden">
    <div class="flex flex-col bg-inherit px-3 py-3 gap-0.5">
      <div class="flex flex-row items-center justify-between">
        <UserInfoSmall :name="postInfo.userName" :color="postInfo.userColor" :imgsize="postInfo.userImgSize" :status="postInfo.userStatus" />
        <div class="flex flex-row items-center justify-end gap-1">
          <DateInfo :date="postInfo.date"/>
          <span tabindex="0" class="material-icons material-icons-round -mr-2 -mt-1 rounded-full hover-effect">more_vert</span>
        </div>
      </div>
      <div class="mx-2">
        <slot name="main"></slot>
      </div>
      <div class="flex flex-row items-baseline gap-0 -mt-1 -mb-1.5 -ml-0.5">
        <VoteButton :voted="postInfo.voted" :votes="postInfo.numVotes" 
          @vote-event="vote"/>
        <CommentButton v-if="postInfo.showSubComments" :numComments="postInfo.numComments" :active="commentsVisible"
          @toggle-comments-event="toggleCommentsVisibility"/>
        <ReplyButton @reply-event="reply"/>
      </div>
    </div>
    <div v-if="commentsVisible" class="bg-gray-800 bg-opacity-5 pl-5">
      <slot name="comments"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import UserInfoSmall, {activityStatus} from '@/components/userInfoSmall.vue'
import VoteButton from '@/components/voteButtons.vue'
import CommentButton from '@/components/commentButton.vue'
import ReplyButton from '@/components/replyButton.vue'
import DateInfo from '@/components/dateInfo.vue'

export interface IPostInfo {
  channel: string,
  tags: string[],
  date: string,
  voted?: number,
  numVotes?: number,
  numComments?: number,
  userName?: string,
  userColor?: string,
  userStatus?: activityStatus,
  userImgSize?: number
  showSubComments?: Boolean
}

export default defineComponent({
  name: 'Container',
  components: {
    UserInfoSmall,
    VoteButton,
    CommentButton,
    ReplyButton,
    DateInfo
  },
  props: {
    postInfo: {
      type: Object as PropType<IPostInfo>,
      required: true
    }
  },
  data() {
    return {
      commentsVisible: false
    }
  },
  methods: {
    toggleCommentsVisibility() {
      this.commentsVisible = !this.commentsVisible
    },
    reply() {
      console.log(this.postInfo)
    },
    vote(newVote:number) {
      console.log(newVote)
    }
  }
})
</script>

<style scoped>
</style>
