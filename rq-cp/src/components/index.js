import Vue from 'vue'
import VuxHeader from './header/VuxHeader'
const customComponents = {
    install: function(Vue) {
        Vue.component('vuxHeader', VuxHeader)
    }
}
Vue.use(customComponents)
export default customComponents
