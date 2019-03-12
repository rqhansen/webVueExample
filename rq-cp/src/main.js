import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

import './registerServiceWorker'
import '@/plugins/index'
import '@/icon/index'

import * as filters from '@/filters' //注册全局过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

import customComponents from '@/components' //注册全局组件
Vue.use(customComponents)

import * as directive from './directives' //注册全局指令
Object.keys(directive).forEach(key => {
    Vue.use(directive[key])
})

import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
