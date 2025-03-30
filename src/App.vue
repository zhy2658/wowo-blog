<template>
  <div class="container is-fluid">
    <div class="notification">
      <CustomHeader />
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomHeader from '@/views/header/CustomHeader.vue'
</script>

<style scoped></style>
