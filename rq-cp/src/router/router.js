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
                    component: () => import('@/views/home/home.vue'),
                    meta: {
                        title: 'rq手游',
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
function handlePageTranslate(to, from) {
    if (to.name !== 'home') {
        store.commit('getPagePosition', 'left')
    } else {
        store.commit('getPagePosition', 'right')
    }
}
/**
 * @description 跳转并设置title
 */
router.beforeEach((to, from, next) => {
    let { title } = to.meta
    if (title) document.title = title
    handlePageTranslate(to, from)
    next()
})

export default router
