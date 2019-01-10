import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import index from '@/views/index.vue'
Vue.use(Router)

/**
 * 1.每个子路由
 */
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
                    component: () => import('@/views/home/home'),
                    meta: {
                        title: 'rq手游',
                        hasFooter: true
                    }
                },
                {
                    name: 'login',
                    path: '/login',
                    component: () => import('@/views/loginRegister/login'),
                    meta: {
                        title: '登录',
                        hasFooter: false
                    }
                },
                {
                    name: 'register',
                    path: '/register',
                    component: () => import('@/views/loginRegister/register'),
                    meta: {
                        title: '注册',
                        hasFooter: false
                    }
                },
                {
                    name: 'lottery',
                    path: '/lottery',
                    component: () => import('@/views/lottery/index'),
                    meta: {
                        title: '购彩',
                        hasFooter: true
                    }
                }
            ]
        }
    ]
})
/**
 * @description 跳转并设置title
 */
router.beforeEach((to, from, next) => {
    let { title } = to.meta
    if (title) document.title = title
    next()
})

export default router
