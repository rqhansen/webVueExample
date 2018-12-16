import Vue from 'vue'
import { Lazyload, Swipe, SwipeItem, Dialog } from 'vant'
// Vue.component(Lazyload.name, Lazyload)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Dialog.name, Dialog)
Vue.use(Lazyload)
Vue.use(Dialog)
