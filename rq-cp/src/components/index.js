import Vue from 'vue'
import VuxHeader from './header/VuxHeader'
import flexLayout from './flexLayout/flexLayout'
const customComponents = {
    install: function(Vue) {
        Vue.component('vuxHeader', VuxHeader)
        Vue.component('flexLayout', flexLayout)
    }
}
Vue.use(customComponents)
export default customComponents
