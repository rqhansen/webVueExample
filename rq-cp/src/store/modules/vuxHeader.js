import { SWIPER_POSITION } from '@/store/mutations-types'

export default {
    state: {
        pagePos: '' //页面左滑还是右滑
    },
    mutations: {
        [SWIPER_POSITION](state, data) {
            state.pagePos = data
        }
    },
    action: {
        //aa(){
        //     commit('***','---');
        // }
    }
}
