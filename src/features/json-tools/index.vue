<template>
    <JsonEditorVue
      class="jse-theme-dark"
      v-model="value"
      model="code"
      lang="zh"
      style="height: 700px;"
     :options="editorOptions"
    />
  </template>

<script setup>
import {ref} from "vue"
import JsonEditorVue from 'json-editor-vue'


const value = ref()

const editorOptions = {
}

</script>
<style>
@import 'vanilla-jsoneditor/themes/jse-theme-dark.css'

</style>

