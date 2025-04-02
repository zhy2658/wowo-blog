import _ from 'lodash'
import '@/assets/scss/style.scss'
import App from './App.vue'
import router from '@/core/router'
import global from './global'
import NavBar from 'wowo-nav'
// import "./js/vue.global.js"

import 'bulma'
import { createApp, ref, onMounted, h } from 'vue'
const app = createApp(App)

app.use(NavBar)
app.use(router)
app.use(global)

app.mount('#app')
