<template>
  <div>
    <div>
      <h1>输入您想要转换的内容：</h1>
      <div class="grid">
        <div class="cell"><input class="input is-small" v-model="input" type="text" placeholder="rgb(0,0,0) 或者 #ffffff" maxlength="7" /></div>
      </div>
    </div>
    <div>
      <span>输出：{{ converted }}</span>
      <span></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import _, { includes } from 'lodash'
const input = ref('#')

const converted = computed(() => {
  !input.value.includes('#') && (input.value = `#${input.value}`)
  let hex = _.get(input.value.split('#'), `1`, '')
  if (hex.length < 6) {
    return
  }
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  let rgb = `rgb(${r}, ${g}, ${b})`
  rgb = rgb.replaceAll('NaN', '-1')
  return rgb
})
</script>

<style scoped></style>
