<template>
  <div class="overflow-hidden">
    <div class="flex flex-col bg-inherit px-3 py-3 gap-0.5">
      <div class="flex flex-row items-center justify-between">
        <UserInfoSmall :name="postInfo.userName" :color="postInfo.userColor" :imgsize="postInfo.userImgSize" :status="postInfo.userStatus" />
        <div class="flex flex-row items-center justify-end gap-1">
          <DateInfo :date="postInfo.date"/>
          <SmallButton icon="more_vert" class=" -mr-2"/>
        </div>
      </div>
      <div class="mx-2">
        <slot name="main"></slot>
      </div>
      <div class="flex flex-row items-center gap-0 -mt-1 -mb-1.5 -ml-0.5">
        <SmallButton :text="postInfo.numUpvotes" icon="arrow_upward"
          :class="[{'text-action-normal':(postInfo.voted===1), 'text-disabled':(postInfo.voted===-1)}]"
          @clicked-event="vote(1)" />
        <SmallButton :text="postInfo.numDownvotes" icon="arrow_downward"
          :class="[{'text-action-danger':(postInfo.voted===-1), 'text-disabled':(postInfo.voted===1)}]"
          @clicked-event="vote(-1)" />
        <Separator v-if="postInfo.showSubComments && commentsExist" />
        <SmallButton v-if="postInfo.showSubComments && commentsExist"
          :text="postInfo.numComments" icon="mode_comment"
          :class="[{'text-action-normal': commentsVisible}]"
          @clicked-event="toggleCommentsVisibility" />
        <Separator />
        <SmallButton text="reply" icon="reply"
          @clicked-event="reply" />
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
import SmallButton from '@/components/smallButton.vue'
import DateInfo from '@/components/dateInfo.vue'
import Separator from '@/components/separator.vue'

export interface IPostInfo {
  channel?: string,
  tags?: string[],
  date: number,
  voted?: number,
  numUpvotes?: number,
  numDownvotes?: number,
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
    SmallButton,
    DateInfo,
    Separator,
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
      console.log(this.$el.id)
    },
    vote(this:any, newVote:number) {
      if (this.postInfo.voted == newVote) {
        newVote = 0   // unvote
      }
      console.log(this.$el.id, newVote)
    }
  },
  computed: {
    commentsExist(this:any):boolean {
      return !!this.postInfo.numComments && this.postInfo.numComments>0
    }
  }
})
</script>

<style scoped>
</style>
