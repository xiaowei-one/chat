<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from "@dcloudio/uni-app";

const active = ref('home')
function tabbarChange(path){
  let url = `/pages/${path}/index?path=${path}`
  if (path === 'home') {
    url = '/pages/home/index'
  }
  uni.navigateTo({ url });
}

onLoad(({ path }) => {
  if (path) {
    active.value = path
  }
})

</script>

<template>
  <van-tabbar v-model="active" @change="tabbarChange">
    <van-tabbar-item name="home" icon="home-o" />
    <van-tabbar-item name="contacts" icon="friends-o" />
    <van-tabbar-item name="person" icon="star-o" />
  </van-tabbar>
</template>