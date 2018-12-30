import Vue from 'vue'
import utils from '@/assets/js/util'
;(function() {
    const MAXMOVE = 200 //最大滑动距离
    let [startY, targetY, transLateY, targetEle, isTouch,timer] = [0, 0, 0, '', false,'']
    Vue.directive('refresh', {
        inserted: function(el) {
            let pos = getComputedStyle(el, null).position //外层容器添加类
            el.style.position = pos !== 'static' ? pos : 'relative'

            let newChild = document.createElement('div') //创建新元素
            newChild.innerHTML = `<svg class="svg-icon" aria-hidden="true"><use xlink:href="#refresh"></use></svg>`
            newChild.classList.add('refresh-wrap')

            el.insertBefore(newChild, el.firstChild)
            targetEle = newChild
            el.addEventListener('touchstart', touchStart, { passive: false })
            el.addEventListener('touchmove', touchMove, { passive: false })
            el.addEventListener('touchend', touchEnd, { passive: false })
        },
        unbind:function(el){

        }
    })

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
        if(timer) clearTimeout(timer);
        startY = e.touches[0].clientY
    }

    function touchMove(e) {
        transLateY = parseInt(e.touches[0].clientY - startY)
        let scrollTop =
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            window.pageYOffset
        if (scrollTop > 0) return
        /**
         * 阻止默认滑动的条件：
         * 1.第一次滑动
         * 2.下滑
         * 3.scrollTop小于等于0
         */
        if (!isTouch && transLateY >= 0) {
            preventDefault()
        }
        isTouch = true
        if (transLateY > MAXMOVE) transLateY = MAXMOVE

        setTransLateY(transLateY)
    }
    function touchEnd(e) {
        setTransLateY(0)
        if(transLateY>=MAXMOVE){
            targetEle.children[0].classList.add('active')
            timer = setTimeout(() => {
                targetEle.children[0].classList.remove('active')
            }, 1000)
        }
        removePreventDefault()
        isTouch = false
    }
})()
