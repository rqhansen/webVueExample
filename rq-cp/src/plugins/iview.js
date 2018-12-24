import Vue from 'vue'
import { Lazyload, Swipe, SwipeItem, Dialog, Icon } from 'vant'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(Lazyload)
Vue.use(Dialog)
Vue.use(Icon)
