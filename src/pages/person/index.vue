<script setup lang="ts">
import { ref } from 'vue'
import Tabbar from '@/components/Tabbar'
const title = ref('person')
</script>

<template>
  <view>
    <text class="title">{{ title }}</text>
  </view>
  <Tabbar />
</template>

<style>
.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
