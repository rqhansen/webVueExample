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
                    component: () => import('@/views/home'),
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
                    name: 'agreement',
                    path: '/agreement',
                    component: () => import('@/views/agreement'),
                    meta: {
                        title: '注册协议',
                        hasFooter: false
                    }
                },
                {
                    name: 'lottery',
                    path: '/lottery',
                    component: () => import('@/views/lottery'),
                    meta: {
                        title: '购彩',
                        hasFooter: true
                    }
                },
                {
                    name: 'prize',
                    path: '/prize',
                    component: () => import('@/views/prize'),
                    meta: {
                        title: '开奖',
                        hasFooter: true
                    }
                },
                {
                    name: 'prizeDetail',
                    path: '/prizeDetail',
                    component: () => import('@/views/prizeDetail/index'),
                    meta: {
                        title: '开奖详情',
                        hasFooter: false
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
