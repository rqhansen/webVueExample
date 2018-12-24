import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/home',
            component: index,
            children: [
                {
                    name: 'home',
                    path: '/home',
                    component: () => import('@/views/home/home.vue')
                },
                {
                    name: 'login',
                    path: '/login',
                    component: () => import('@/views/login.vue')
                }
            ]
        }
    ]
})
