<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  contactImg: String,
  date: String,
  lastMessage: String,
  name: String,
})

</script>
<template>
  <view class="person-item">
    <image :src="props.contactImg" />
    <view class="person-info">
      <view class="person-top">
        <text>{{ props.name }}</text>
        <text class="text-color-disable font-size-sm">{{ props.date }}</text>
      </view>
      <text class="text-color-grey font-size-base">{{ props.lastMessage }}</text>
    </view>
  </view>
</template>

<style scoped>
.person-item {
  display: flex;
  align-items: center;
  padding: 20rpx 40rpx 20rpx 20rpx;
  border-bottom: 1px solid var(--uni-bg-color-grey);
}

.person-item image {
  width: 90rpx;
  height: 90rpx;
  border-radius: 9px;
}

.person-info {
  width: calc(100% - 120rpx);
  margin-left: 30rpx;
}

.person-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
