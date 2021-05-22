<template>
  <div class="flex flex-col bg-primary p-4 gap-1 shadow-sm rounded-md">
    <div class="flex flex-row items-center justify-between">
      <UserInfoSmall username="dumdum" usercolor="green" imgsize="2" />
      <div class="flex flex-row items-center justify-end gap-2">
        <DateInfo date="20 may"/>
        <span class="material-icons material-icons-round rounded-full hover:bg-gray-200 p-1 cursor-pointer">more_vert</span>
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
    <div class="flex flex-row items-center gap-4">
      <VoteButton voted="-1" />
      <CommentButton :numComments="12" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
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
    heading: {
      type: String,
      required: false
    }
  },
})
</script>

<style scoped>

</style>
