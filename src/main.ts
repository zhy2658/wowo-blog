import _ from 'lodash'
import '@/assets/scss/style.scss'
import App from './App.vue'
import router from './router'
import global from './global'
// import "./js/vue.global.js"

import 'bulma'
import { createApp, ref, onMounted, h } from 'vue'
const app = createApp(App)

app.use(router)
app.use(global)

document.addEventListener('DOMContentLoaded', () => {
  app.mount('#app')
})
// console.log(
//   _.flattenDeep([
//     [1, 3, 4],
//     [3, 4, 5]
//   ])
// )
