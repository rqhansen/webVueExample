import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// import vuxHeader from '@/store/modules/vuxHeader'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        // vuxHeader
    },
    state: {
        // pagePos: ''
    },
    getters
    // mutations: {
    //     getPagePosition(state, data) {
    //         state.pagePos = data
    //     }
    // }
})
