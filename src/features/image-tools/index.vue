<template>
	<div>
		<div class="file has-name is-boxed">
			<label class="file-label">
				<input class="file-input" type="file" name="resume" @change="changeImg" />
				<span class="file-cta">
					<span class="file-icon">
						<i class="fas fa-upload"></i>
					</span>
					<span class="file-label"> 选择一个图片 </span>
				</span>
				<span class="file-name"> {{imgFile.name ?imgFile.name:'请选择文件'}}</span>
			</label>
		</div>
		<RouterView :imgFile="imgFile" @receiveData="receiveData" />
	</div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'

const imgFile = ref(new File([], ''));

const changeImg = async (e: any) => {
    imgFile.value = e.target.files[0]
}

const receiveData= (e)=>{
	console.log(e)
}

</script>

<style scoped></style>