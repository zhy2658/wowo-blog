import type { App } from 'vue'
import _ from 'lodash'
declare module 'vue' {
  export interface ComponentCustomProperties {
    $_: typeof _
  }
}
