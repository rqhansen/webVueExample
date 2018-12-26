import Vue from 'vue'
import utils from '@/assets/js/util'

const MAXHEIGHT = '1'
const TOP = '-1.5'
let [startY, targetY, translateY] = [0, 0, 0, 0]
function setTransition(ele, y) {
    ele.style.transform = `translate3d(0,${y + 'rem'},0)`
}
/**
 *
 *@description 准备滑动
 */
function touchStart(event) {
    //准备滑动
    startY = event.touches[0].clientY
    this.translateY = 0
}
/**
 * @description 滑动
 */
function touchMove(event) {
    targetY = event.touches[0].clientY
    translateY = parseFloat(targetY - startY)
    if (translateY > 0) {
        document.body.addEventListener(
            //阻止默认的滑动事件
            'touchmove',
            e => {
                e.preventDefault()
            },
            {
                passive: false //兼容ios和android
            }
        )
    }
    /**
     * 滑动超过最大允许滑动的值
     */
    if (translateY > MAXHEIGHT) {
        translateY = MAXHEIGHT
    }
    /**
     * 向上滑
     */
    if (translateY < 0) {
        translateY = top
    }
    setTransition(this.firstChild, translateY)
    /**
     * 超出边界执行ontouchend
     */
    if (event.targetTouches[0].pageY <= 0) {
        // this.ontouchend()
    }
}
/**
 * 取消滑动
 */
function touchEnd(event) {
    document.body.removeEventListener(
        'touchmove',
        e => {
            e.preventDefault()
        },
        { passive: false }
    )
    if (translateY >= MAXHEIGHT) {
        let expression = this.options.expression
        if (expression) {
            expression().then(() => {
                setTransiton(this.firstChild, TOP)
            })
        } else {
            setTransition(this.firstChild, TOP)
        }
    }
}
Vue.directive('refresh', {
    inserted(wrap, binding, context) {
        //当被绑定的元素插入到DOM中时
        let position = window.getComputedStyle(wrap, null).position
        let ele = document.createElement('div')
        ele.innerHTML = `<svg class="svg-icon"
        aria-hidden="true">
     <use xlink:href="#refresh"></use>
   </svg>`

        utils.addClass(ele, 'refresh-wrap')
        let val = binding.value
        wrap.options = {
            expression: typeof binding.value === 'function' ? binding.value : ''
        }
        wrap.insertBefore(ele, wrap.firstChild) //将ele插入到wrap元素的头部
        wrap.style.position = position !== 'static' ? position : 'relative'
        wrap.style.overflow = 'hidden'
        wrap.addEventListener('touchstart', touchStart)
        wrap.addEventListener('touchmove', touchMove)
        wrap.addEventListener('touchend', touchEnd)
    },
    unbind(el) {
        el.removeEventListener('touchstart', touchStart)
        el.removeEventListener('touchmove', touchMove)
        el.removeEventListener('touchend', touchEnd)
    }
})
