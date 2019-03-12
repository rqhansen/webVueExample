import FlexLayout from './src/main.js' //局部注册的方式

FlexLayout.install = function(Vue) {
    Vue.component(FlexLayout.name, FlexLayout)
}
export default FlexLayout
