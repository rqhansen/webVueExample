import VuxHeader from './header/VuxHeader'
import flexLayout from './flexLayout/flexLayout'
const customComponents = {
    install: function(Vue) {
        Vue.component('vuxHeader', VuxHeader)
        Vue.component('flexLayout', flexLayout)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(customComponents)
}
export default customComponents
