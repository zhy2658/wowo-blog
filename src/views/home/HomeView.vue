<template>
  <CustomHeader />
  <div class="container is-fluid">
    <div class="notification">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomHeader from '@/shared/components/header/CustomHeader.vue'

</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
