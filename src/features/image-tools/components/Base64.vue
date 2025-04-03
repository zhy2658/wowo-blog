<template>
	<div>
		<h1>图片转Base64</h1>
		<button class="button is-primary" @click="excute">执行</button>
		<div v-if="previewUrl">
			<img :src="previewUrl" style="height: 200px" alt="" />
		</div>
		<textarea class="textarea" v-model="content" style="height:500px ;"></textarea>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, defineProps } from 'vue'
import _ from 'lodash'

const props = defineProps<{
	imgFile: File
}>();

const content = ref(``)
const previewUrl = ref(``)

const excute = async () => {
  if (props.imgFile.size > 2 * 1024 * 1024) { // 限制2MB
    alert('文件大小不能超过2MB！');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e: ProgressEvent<FileReader>) => {
    const result = e.target?.result;
    if (typeof result === 'string') {
			previewUrl.value = result
      content.value = result;
    }
  };
  reader.readAsDataURL(props.imgFile);
}


</script>

<style scoped></style>