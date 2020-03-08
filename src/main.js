import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Resize from '@/howdy/lib/directive-resize'
// import Scroll from '@/howdy/lib/directive-scroll'
// import MouseMenu from '@/howdy/lib/directive-mouse-menu'
// import SizeObserver from '@/howdy/lib/directive-size-observer'

// import { Resize, Scroll, MouseMenu, SizeObserver } from './howdy'

import { Resize, Scroll, MouseMenu, SizeObserver } from '@/howdy/index.js'

Vue.config.productionTip = false

Vue.directive('resize', Resize)
Vue.directive('scroll', Scroll)
Vue.directive('mouseMenu', MouseMenu)
Vue.directive('sizeObserver', SizeObserver)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
