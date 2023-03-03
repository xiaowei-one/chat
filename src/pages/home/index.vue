<script setup lang="ts">
import { ref } from "vue";
import { host } from "@/api/api";
import request from "@/api/request";
import Tabbar from "@/components/Tabbar";
import ContactsItem from "./components/contactsItem";
import { onLoad, onShow, onHide } from "@dcloudio/uni-app";

const messages = ref([]);

onLoad(() => {
  console.log("load");
});

onShow(() => {
  console.log("show");
  request({
    url: "/contacts/getAllContactsMessage",
    success({ data }) {
      if (Array.isArray(data.list)) {
        messages.value = data.list;
      }
    },
  });
});

onHide(() => {
  console.log("hide");
});
</script>

<template>
  <view class="home">
    <van-nav-bar title="动心" />
    <view class="main">
      <view
        class="empty"
        v-if="messages.length <= 0"
        >
        <van-empty
          image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
          image-size="80"
          description="暂时没有新消息"
        />
      </view>

      <view 
        class="contacts-item"
        v-else
      >
        <ContactsItem
          v-for="item in messages"
          :contactImg="item.contactImg"
          :date="item.date"
          :lastMessage="item.lastMessage"
          :name="item.name"
        />
      </view>
    </view>
    <Tabbar />
  </view>
</template>
<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .main {
    flex: 1;
    overflow: auto;

    .empty {
      height: calc(100%-50px);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .contacts-item {
      height: 100%;
    }
  }
}
</style>
