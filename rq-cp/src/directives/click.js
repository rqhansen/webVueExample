import Vue from 'vue'
import utils from '@/assets/js/util'
utils.addClass(targetEle.children[0], 'active')
function addClass(el) {
    utils.addClass(el, 'click-active')
}
Vue.directive('feed-back-click', {
    insert(el, binding, context) {
        el.addEventListener(
            'tap',
            () => {
                addClass(el)
            },
            { passive: false }
        )
    },
    unbind() {
        el.removeEventListener(
            'tap',
            () => {
                addClass(el)
            },
            { passive: false }
        )
    }
})
