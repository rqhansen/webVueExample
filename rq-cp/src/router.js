import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
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
                    component: () => import('components/home/home.vue')
                }
            ]
        }
    ]
})
