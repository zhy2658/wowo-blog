<template>
  <NavBar :menu="menu" :title="title" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const menu = ref([
  {
    path: '/',
    label: '主页'
  },
  {
    path: '/color/hex',
    label: '颜色转换'
  },
  {
    path: '/image/compress',
    label: '图片压缩'
  },
  {
    path: '/image/base64',
    label: '图片转Base64'
  },
  {
    path: '/json',
    label: 'json格式化'
  }
])
const title = ref("zhy工具箱")
</script>

<style scoped>
@import 'wowo-nav/dist/wowo-nav.css';
.header {
  margin-bottom: 20px;
}
a {
  text-decoration: none !important;
  color: hsl(217, 71%, 53%) !important;
}
</style>
