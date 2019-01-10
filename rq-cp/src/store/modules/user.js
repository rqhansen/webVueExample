import { SAVE_USER } from '@/store/getters'
let user = localStorage.getItem('user')
export default {
    state: {
        user: user ? JSON.parse(user) : {}
    },
    mutations: {
        SAVE_USER(state, data) {
            let userInfo = data || {}
            state.user = userInfo
            localStorage.setItem('user', JSON.stringify(userInfo))
        }
    },
    actions: {}
}
