import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
Vue.use(Router)

const router = new Router({
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
                    component: () => import('@/views/home/home.vue'),
                    meta: {
                        hasFooter: true
                    }
                },
                {
                    name: 'login',
                    path: '/login',
                    component: () => import('@/views/login.vue'),
                    meta: {
                        title: '登录',
                        hasFooter: false
                    }
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    let { title } = to.meta
    if (title) document.title = title
    next()
})

export default router
