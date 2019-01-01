import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import './registerServiceWorker'
import '@/assets/js/axios'
import '@/plugins/index'
import '@/icon/index'
import '@/directives/index.js'

import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
