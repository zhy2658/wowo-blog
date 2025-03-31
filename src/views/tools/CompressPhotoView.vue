<template>
  <div>
    <h1>图片压缩</h1>
    <p>提示：此压缩模块是基于Google Squoosh的开源插件，整个过程由前端完成，无需后端参与。我们保证网站不会将任何信息发送到服务器。</p>
    <div style="margin: 10px 0">
      <label>图片质量：</label>
      <input class="input" type="number" placeholder="Text input" v-model="quality" style="max-width: 400px" />
      <button class="button is-primary" @click="excute">压缩</button>
    </div>
    <div>
      <div class="file has-name is-boxed">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" @change="changeImg" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label"> Choose a file… </span>
          </span>
          <span class="file-name"> {{ origiImg.name }}</span>
        </label>
      </div>
      <div v-if="compressedImg.link">
        <p>质量为0.7，压缩成功！</p>
        <p>图片原始大小为：{{ (origiImg['size'] / 1024 / 1024).toFixed(2) }}MB，压缩后大小为：{{ (compressedImg.size / 1024 / 1024).toFixed(2) }}MB</p>
        <div>
          <img :src="compressedImg.link" style="height: 200px" alt="" />
        </div>
        <a :href="compressedImg.link" download> <button class="button is-link">下载图片</button></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import _ from 'lodash'
import { compress } from 'squoosh-compress'
const origiImg = reactive({ name: '请选择图片文件', size: 0, type: '' })
const compressedImg = reactive({ name: '11', size: 0, type: '', link: '' })
const quality = ref(0.7)
let file = {}

const changeImg = async (e: any) => {
  file = e.target.files[0]
  Object.assign(origiImg, file)
  origiImg['name'] = file['name']
  origiImg['size'] = file['size']
  origiImg['type'] = file['type']
}

const excute = async () => {
  if (file == null) return
  const data2 = await compress(
    file,
    {
      type: 'browser-jpeg',
      options: {
        quality: quality.value
      }
    },
    file['name']
  )
  compressedImg['name'] = data2['name']
  compressedImg['size'] = data2['size']
  compressedImg['type'] = data2['type']
  Object.assign(compressedImg, data2)

  // 生成对象URL
  const objectURL = URL.createObjectURL(data2)
  compressedImg['link'] = objectURL
}
</script>

<style scoped></style>
