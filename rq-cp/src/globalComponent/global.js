import Vue from 'vue'
import { Lazyload, Swipe, SwipeItem, Dialog } from 'vant'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(Lazyload)
Vue.use(Dialog)
