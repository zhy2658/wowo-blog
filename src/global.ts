import _ from 'lodash'

import type { App } from 'vue'

const fn = () => '鱼钓猫的小鱼干'

export default {
  install(app: App) {
    app.config.globalProperties.$_ = _
  }
}
