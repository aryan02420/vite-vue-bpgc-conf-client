<template>
  <div class="overflow-hidden scroll-margin">
    <div class="flex flex-col bg-inherit px-3 py-3 gap-0.5">
      <div class="flex flex-row items-center justify-between">
        <UserInfoSmall
          :name="postInfo.userName"
          :color="postInfo.userColor"
          :imgsize="postInfo.userImgSize"
          :status="postInfo.userStatus"
        />
        <div class="flex flex-row items-center justify-end gap-1">
          <DateInfo :date="postInfo.date" />
          <SmallButton icon="more_vert" class="-mr-2" />
        </div>
      </div>
      <div class="mx-2">
        <slot name="main"></slot>
      </div>
      <div class="flex flex-row items-center gap-0 -mt-1 -mb-1">
        <SmallButton
          :text="postInfo.numUpvotes"
          icon="thumb_up"
          :class="[
            {
              'text-color-primary': postInfo.voted === 1,
              'text-disabled': postInfo.voted === -1,
            },
          ]"
          @clicked-event="vote(1)"
        />
        <SmallButton
          :text="postInfo.numDownvotes"
          icon="thumb_down"
          :class="[
            {
              'text-color-secondary': postInfo.voted === -1,
              'text-disabled': postInfo.voted === 1,
            },
          ]"
          @clicked-event="vote(-1)"
        />
        <SmallButton
          v-if="postInfo.showSubComments && commentsExist"
          :text="postInfo.numComments"
          icon="mode_comment"
          :class="[{ 'text-color-primary': commentsVisible }]"
          @clicked-event="toggleCommentsVisibility"
        />
        <SmallButton text="reply" @clicked-event="reply" />
        <SmallButton
          :text="isBookmarked ? 'saved' : 'save'"
          :class="[{ 'text-color-secondary': isBookmarked }]"
          @clicked-event="bookmark"
        />
        <SmallButton text="share" @clicked-event="share" />
        <SmallButton text="report" @clicked-event="report" />
      </div>
    </div>
    <transition name="collapse">
      <div v-if="commentsVisible" class="pl-5 bg-gray-500 bg-opacity-5">
        <slot name="comments"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import UserInfoSmall, { activityStatus } from '@/components/userInfoSmall.vue'
import SmallButton from '@/components/smallButton.vue'
import DateInfo from '@/components/dateInfo.vue'
import Separator from '@/components/separator.vue'

export interface IPostInfo {
  channel?: string
  tags?: string[]
  date: number
  voted?: number
  numUpvotes?: number
  numDownvotes?: number
  numComments?: number
  userName?: string
  userColor?: string
  userStatus?: activityStatus
  userImgSize?: number
  showSubComments?: Boolean
  poll?: any
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
      required: true,
    },
  },
  data() {
    return {
      commentsVisible: false,
      isBookmarked: false,
    }
  },
  methods: {
    toggleCommentsVisibility() {
      this.commentsVisible = !this.commentsVisible
    },
    reply() {
      console.log('this: ', this.$el.id, '\ntlc: ', this)
    },
    share() {
      console.log(this.$el.id)
    },
    report() {
      console.log(this.$el.id)
    },
    vote(newVote: number) {
      if (this.postInfo.voted == newVote) {
        newVote = 0 // unvote
      }
      console.log(this.$el.id, newVote)
    },
    bookmark() {
      this.isBookmarked = !this.isBookmarked
    },
  },
  computed: {
    commentsExist(this: any): boolean {
      return !!this.postInfo.numComments && this.postInfo.numComments > 0
    },
  },
})
</script>

<style lang="postcss" scoped>
.scroll-margin {
  scroll-margin-top: 3rem;
  scroll-margin-bottom: 4rem;
}
.collapse-enter-active,
.collapse-leave-active {
  transition: all 100ms ease-out;
}
.collapse-enter-from,
.collapse-leave-to {
  transform: scaleY(0);
  opacity: 0;
}
.collapse-enter-from,
.collapse-leave-to .collapse-enter-to,
.collapse-leave-from {
  transform-origin: 50% 0%;
}
</style>
