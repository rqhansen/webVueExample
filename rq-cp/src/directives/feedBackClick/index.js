import feedBackClick from './feedBackClick'
function install(Vue) {
    Vue.directive('feedBackClick', feedBackClick)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

feedBackClick.install = install
export default feedBackClick
