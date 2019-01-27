import Vue from 'vue'
import {
    Lazyload,
    Swipe,
    SwipeItem,
    Dialog,
    Button,
    Loading,
    Checkbox,
    CheckboxGroup,
    Toast
} from 'vant'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(Lazyload)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Loading)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(Toast)
