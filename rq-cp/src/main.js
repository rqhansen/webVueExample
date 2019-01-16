import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

import './registerServiceWorker'
import '@/assets/js/axios'
import '@/plugins/index'
import '@/icon/index'
import '@/directives/index'
import '@/components/index' //全局组件
import '@/filters/index'

import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
