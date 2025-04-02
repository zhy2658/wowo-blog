<template>
	<div>
		<h1>图片压缩</h1>
		<p>提示：此压缩模块整个过程由前端完成，无需后端参与。高宽推荐选择其中一个，等比例缩放图片，不设置高宽尺寸则是原图大小。</p>
		<div style="margin: 10px 0">
			<div>
				<label>高度：</label>
				<input class="input" type="" placeholder="高度" v-model="height" style="max-width: 400px" />
			</div>
			<div>
				<label>宽度：</label>
				<input class="input" type="" placeholder="宽度" v-model="width" style="max-width: 400px" />
			</div>
			<div>
				<label>图片质量：</label>
				<input class="input" type="number" placeholder="Text input" v-model="quality" style="max-width: 400px" />
			</div>
			<button class="button is-primary" @click="excute">压缩</button>
		</div>
		<div>
			<p>图片原始大小为：{{ (props.imgFile['size'] / 1024 / 1024).toFixed(2) }}MB</p>
			<div v-if="compressedImg.link">
				<p>质量为0.7，压缩成功！</p>
				<p>压缩后大小为：{{ (compressedImg.size / 1024 /
					1024).toFixed(2) }}MB</p>
				<div>
					<img :src="compressedImg.link" style="height: 200px" alt="" />
				</div>
				<a :href="compressedImg.link" download> <button class="button is-link">下载图片</button></a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, defineProps } from 'vue'
import _ from 'lodash'
import Compressor from 'compressorjs';

const props = defineProps<{
	imgFile: Object
}>()

const compressedImg = reactive({ name: '', size: 0, type: '', link: '', width: 0, height: 0 })
const quality = ref(0.7)
const height = ref(0)
const width = ref(0)

const excute = async () => {
	let params = {
		quality: quality.value,
		success(res) {
			compressedImg['name'] = res['name']
			compressedImg['size'] = res['size']
			compressedImg['type'] = res['type']
			compressedImg['link'] = URL.createObjectURL(res)
		},
		error(err) {
			console.log(err.message);
		},
	}
	height.value && (params['height'] = height.value)
	width.value && (params['width'] = width.value)
	new Compressor(props.imgFile, params);
}
</script>

<style scoped></style>