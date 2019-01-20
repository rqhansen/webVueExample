import Vue from 'vue'
import utils from '@/assets/js/utils/index'
;(function() {
    function addClass() {
        utils.addClass(this, 'click-active')
        let {
            options: { feedBack, lotteryId }
        } = this
        if (feedBack && typeof feedBack === 'function') {
            feedBack(lotteryId)
        }
        this.options.timer && clearTimeout(this.options.timer)
        this.options.timer = setTimeout(() => {
            utils.removeClass(this, 'click-active')
        }, 300)
    }
    function removeClass() {
        utils.removeClass(this, 'click-active')
    }
    Vue.directive('feedBackClick', {
        bind: function(el, binding) {
            el.options = {}
            if (typeof binding.value === 'function') {
                //expression为函数
                el.options.feedBack = binding.value
            } else {
                let { funs, lotteryId } = binding.value //expression为对象
                el.options.feedBack = funs
                el.options.lotteryId = lotteryId
            }
            el.options.timer = null
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
