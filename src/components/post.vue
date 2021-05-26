<template>
  <div class="flex flex-col bg-primary px-4 py-4 gap-4 shadow-sm rounded-md">
    <div class="flex flex-row items-center justify-between">
      <UserInfoSmall :username="username" :usercolor="usercolor" :imgsize="userimgsize"/>
      <div class="flex flex-row items-center justify-end gap-2">
        <DateInfo :date="date"/>
        <span class="material-icons material-icons-round rounded-full hover:bg-gray-200 p-1 cursor-pointer">more_vert</span>
      </div>
    </div>
    <div class="mx-2">
      <div class="flex flex-row flex-wrap gap-1 items-baseline w-auto">
        <a class="text-sm hover:text-upvote hover:underline mr-1" :href="channelURL">#{{channel}}</a>
        <a v-for="tag in tags" :key="tag"
          class="text-xs hover:bg-gray-200 hover:text-secondary px-2 -mx-1 rounded-full"
          :href="tagUrl(tag)">{{tag}}</a>
      </div>
      <div>
        <slot></slot>
      </div>
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
