<template>
  <NavBar :menu="menu" />
  <!--  <div class="header">
   
   <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <a class="navbar-item">
            <RouterLink to="/"> 主页 </RouterLink>
          </a>
        </li>
        <li>
          <a class="navbar-item">
            <RouterLink to="/tools/convertRGB">十六进制转RGB</RouterLink>
          </a>
        </li>
      </ul>
    </nav>
  </div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
const menu = ref([
  {
    path: '/',
    label: '主页'
  },
  {
    path: '/tools/convertRGB',
    label: '十六进制转RGB'
  }
])
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
