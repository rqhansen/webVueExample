import Refresh from './refresh.js'
console.log(Refresh)

function install(Vue) {
    Vue.directive('Refresh', Refresh)
}

if (typeof window !== 'undefined' && window.Vue) {
    //自动注册
    install(window.Vue)
}

Refresh.install = install
export default Refresh
