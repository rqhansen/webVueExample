import Vue from 'vue'
import utils from '@/assets/js/util'
;(function() {
    const MAXOFFSETY = 180 //最大滑动距离
    let [startY, transLateY, targetEle, isTouch, expression, top] = [
        0,
        0,
        '',
        false,
        ''
    ]
    Vue.directive('refresh', {
        bind: function(el, binding) {
            expression = binding.value
        },
        inserted: function(el, binding) {
            if (!binding.value || typeof binding.value !== 'function') return
            let pos = getComputedStyle(el, null).position //外层容器添加类
            el.style.position = pos !== 'static' ? pos : 'relative'
            utils.addClass(el, 'refresh-animation-wrap')
            let newChild = document.createElement('div') //创建新元素
            newChild.innerHTML = `<svg class="svg-icon" aria-hidden="true"><use xlink:href="#refresh"></use></svg>`
            newChild.classList.add('refresh-wrap')

            el.insertBefore(newChild, el.firstChild)
            targetEle = newChild
            top = el.getBoundingClientRect().top
            el.addEventListener('touchstart', touchStart, { passive: false })
            el.addEventListener('touchmove', touchMove, { passive: false })
            el.addEventListener('touchend', touchEnd, { passive: false })
            el.addEventListener('touchcancle', touchCancle, { passive: false })
        },
        unbind: function(el) {
            el.removeEventListener('touchstart', touchStart, { passive: false })
            el.removeEventListener('touchmove', touchMove, { passive: false })
            el.removeEventListener('touchend', touchEnd, { passive: false })
            el.addEventListener('touchcancle', touchCancle, { passive: false })
        }
    })

    //判断滚动元素所在的位置
    function getElePosition() {
        return (
            top - targetEle.parentNode.getBoundingClientRect().top ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            window.pageYOffset
        )
    }
    //阻止和移除默认事件
    function setPreventDefault(e) {
        e.preventDefault()
    }

    function preventDefault() {
        document.body.addEventListener('touchmove', setPreventDefault, {
            passive: false
        })
    }
    function removePreventDefault() {
        document.body.removeEventListener('touchmove', setPreventDefault, {
            passive: false
        })
    }

    //设置偏移
    function setTransLateY(y) {
        targetEle.style.transform = `translateY(${y / 75}rem)`
    }

    function touchStart(e) {
        //初始化
        utils.removeClass(targetEle.children[0], 'active')
        startY = e.touches[0].clientY
        transLateY = 0
    }

    function touchMove(e) {
        transLateY = parseInt(e.touches[0].clientY - startY)
        if (getElePosition() > 0) return
        /**
         * 阻止默认滑动的条件：
         * 1.第一次滑动
         * 2.下滑
         * 3.scrollTop小于等于0
         */
        if (!isTouch && transLateY > 0) {
            preventDefault()
        }
        isTouch = true
        if (transLateY > MAXOFFSETY) transLateY = MAXOFFSETY
        setTransLateY(transLateY)
    }

    function touchEnd() {
        if (getElePosition() > 0) return
        if (transLateY >= MAXOFFSETY) {
            utils.addClass(targetEle.children[0], 'static')
            expression().then(() => {
                utils.removeClass(targetEle.children[0], 'static')
                utils.addClass(targetEle.children[0], 'active')
                setTransLateY(0)
            })
        } else {
            setTransLateY(0)
        }
        removePreventDefault()
        isTouch = false
    }

    function touchCancle() {
        setTransLateY(0)
        removePreventDefault()
    }
})()
