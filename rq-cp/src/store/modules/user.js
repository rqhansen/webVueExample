import { SAVE_USER } from '@/store/getters'
export default {
    state: {
        user: ''
    },
    mutations: {
        SAVE_USER(state, data) {
            state.user = data || {}
        }
    },
    actions: {}
}
