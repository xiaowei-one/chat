<script>

</script>
<template>
  <view class="person-item">
    <image src="/static/image/head.png" />
    <view class="person-info">
      <view class="person-top">
        <text>无双剑姬</text>
        <text class="text-color-disable font-size-sm">2022-12-22</text>
      </view>
      <text class="text-color-grey font-size-base">我是无双王者</text>
    </view>
  </view>
</template>

<style scoped>
.person-item {
  display: flex;
  align-items: center;
  padding: 20rpx;
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
