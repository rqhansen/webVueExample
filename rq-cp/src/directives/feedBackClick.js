import Vue from 'vue'
import utils from '@/assets/js/util'
;(function() {
    function addClass(el) {
        utils.addClass(el, 'click-active')
        let {
            option: { expression }
        } = el
        if (expression && typeof expression === 'function') {
            expression()
        }
    }
    function removeClass(el) {
        utils.removeClass(el, 'click-active')
    }
    Vue.directive('feedBackClick', {
        bind: function(el, binding) {
            el.option = {}
            el.option.expression = binding.value
        },
        inserted(el, binding) {
            el.addEventListener(
                'click',
                () => {
                    addClass(el)
                },
                { passiv: false }
            )
            el.addEventListener(
                'touchend',
                () => {
                    removeClass(el)
                },
                { passive: false }
            )
        },
        unbind(el) {
            el.removeEventListener(
                'click',
                () => {
                    addClass(el)
                },
                { passiv: false }
            )
            el.removeEventListener(
                'touchend',
                () => {
                    removeClass(el)
                },
                { passiv: false }
            )
        }
    })
})()
