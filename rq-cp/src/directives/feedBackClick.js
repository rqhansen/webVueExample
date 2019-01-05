import Vue from 'vue'
import utils from '@/assets/js/util'
;(function() {
    function addClass() {
        utils.addClass(this, 'click-active')
        let {
            option: { expression }
        } = this
        if (expression && typeof expression === 'function') {
            expression()
        }
        this.option.timer && clearTimeout(this.option.timer)
        this.option.timer = setTimeout(() => {
            utils.removeClass(this, 'click-active')
        }, 300)
    }
    function removeClass() {
        utils.removeClass(this, 'click-active')
    }
    Vue.directive('feedBackClick', {
        bind: function(el, binding) {
            el.option = {}
            el.option.expression = binding.value
            el.option.timer = null
        },
        inserted(el) {
            el.addEventListener('click', addClass, {
                passiv: false
            })
            el.addEventListener('touchend', removeClass, { passive: false })
        },
        unbind(el) {
            el.removeEventListener('click', addClass, { passiv: false })
            el.removeEventListener('touchend', removeClass, { passiv: false })
        }
    })
})()
