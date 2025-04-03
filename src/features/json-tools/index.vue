<template>
    <JsonEditorVue
      v-model="value"
      model="code"
      lang="zh"
      style="height: 700px;"
      v-bind="{/* local props & attrs */}"
    />
  </template>

<script setup>
import {ref} from "vue"
import JsonEditorVue from 'json-editor-vue'

const value = ref()
</script>

