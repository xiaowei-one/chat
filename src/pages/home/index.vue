<template>
  <view>
    <text class="title">{{ title }}</text>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style>
.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
