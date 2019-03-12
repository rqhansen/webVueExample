import Refresh from './refresh'

function install(Vue) {
    Vue.directive('Refresh', Refresh)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

Refresh.install = install
export default Refresh
