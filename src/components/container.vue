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
        <Poll v-if="!!postInfo.poll" class="my-2"
          :options="postInfo.poll.options" :voted="postInfo.poll.voted"
          @clicked-event="pollVote" />
      </div>
      <div class="flex flex-row items-center gap-0 -mt-1 -mb-1.5 -ml-0.5">
        <SmallButton :text="postInfo.numUpvotes" icon="thumb_up"
          :class="[{'text-action-normal':(postInfo.voted===1), 'text-disabled':(postInfo.voted===-1)}]"
          @clicked-event="vote(1)" />
        <SmallButton :text="postInfo.numDownvotes" icon="thumb_down"
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
        <Separator />
        <SmallButton icon="bookmark"
          :class="[{'text-action-danger': isBookmarked}]"
          @clicked-event="bookmark" />
        <Separator />
        <SmallButton icon="share"
          @clicked-event="share" />
        <Separator />
        <SmallButton icon="flag"
          @clicked-event="report" />
      </div>
    </div>
    <div v-if="commentsVisible" class="bg-gray-500 bg-opacity-5 pl-5">
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
import Poll from '@/components/poll.vue'

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
  userImgSize?: number,
  showSubComments?: Boolean,
  poll?: any
}

export default defineComponent({
  name: 'Container',
  components: {
    UserInfoSmall,
    SmallButton,
    DateInfo,
    Separator,
    Poll,
  },
  props: {
    postInfo: {
      type: Object as PropType<IPostInfo>,
      required: true
    }
  },
  data() {
    return {
      commentsVisible: false,
      isBookmarked: false
    }
  },
  methods: {
    toggleCommentsVisibility() {
      this.commentsVisible = !this.commentsVisible
    },
    reply() {
      console.log(this.$el.id)
    },
    share() {
      console.log(this.$el.id)
    },
    report() {
      console.log(this.$el.id)
    },
    vote(newVote:number) {
      if (this.postInfo.voted == newVote) {
        newVote = 0   // unvote
      }
      console.log(this.$el.id, newVote)
    },
    pollVote(newVote:number) {
      console.log(this.$el.id, newVote)
    },
    bookmark() {
      this.isBookmarked = ! this.isBookmarked
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
