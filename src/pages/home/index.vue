<script setup lang="ts">
import { ref } from 'vue'
import Tabbar from '@/components/Tabbar'
import ContactsItem from './components/contactsItem'

</script>

<template>
  <view>
    <van-nav-bar title="动心" />
    <ContactsItem />
    <ContactsItem />
    <ContactsItem />
  </view>
  <Tabbar />
</template>