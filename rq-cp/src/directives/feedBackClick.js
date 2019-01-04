import Vue from 'vue'
import utils from '@/assets/js/util'
;(function() {
    function addClass() {
        let vm = this
        utils.addClass(this, 'click-active')
        let {
            option: { expression }
        } = this
        if (expression && typeof expression === 'function') {
            expression()
            setTimeout(() => {
                utils.removeClass(vm, 'click-active')
            }, 0)
        }
    }
    function removeClass() {
        utils.removeClass(this, 'click-active')
    }
    Vue.directive('feedBackClick', {
        bind: function(el, binding) {
            el.option = {}
            el.option.expression = binding.value
        },
        inserted(el, binding) {
            el.addEventListener('click', addClass, {
                passiv: false
            })
            el.addEventListener('touchend', removeClass, { passive: false })
        },
        unbind(el) {
            utils.removeClass(el, 'click-active')
            el.removeEventListener('click', addClass, { passiv: false })
            el.removeEventListener('touchend', removeClass, { passiv: false })
        }
    })
})()
