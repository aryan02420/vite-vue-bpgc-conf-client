<template>
  <div>
    <div class="flex flex-col bg-inherit px-3 py-3 gap-0.5 roaunded-md">
      <div class="flex flex-row items-center justify-between">
        <UserInfoSmall :name="postInfo.userName" :color="postInfo.userColor" :imgsize="postInfo.userImgSize" :status="postInfo.userStatus" />
        <div class="flex flex-row items-center justify-end gap-1">
          <DateInfo :date="postInfo.date"/>
          <span tabindex="0" class="material-icons material-icons-round -mr-2 -mt-1 rounded-full hover:bg-gray-200 cursor-pointer">more_vert</span>
        </div>
      </div>
      <div class="mx-2">
        <slot name="main"></slot>
      </div>
      <div class="flex flex-row items-baseline gap-0 -mt-1 -mb-1.5 -ml-0.5">
        <VoteButton :voted="postInfo.voted" :votes="postInfo.numVotes" />
        <CommentButton :numComments="postInfo.numComments" :active="commentsVisible"
          @toggle-comments-event="toggleCommentsVisibility"/>
        <ReplyButton @reply-event="toggleCommentsVisibility"/>
      </div>
    </div>
    <div v-if="commentsVisible" class="bg-secondary rounded-b-md pl-5">
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
      console.log('ran')
    }
  }
})
</script>

<style scoped>
</style>
