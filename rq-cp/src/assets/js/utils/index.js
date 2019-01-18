import {rndNum} from './rndNum.js';
import {drawVeryCode} from './drawVeryCode';
import {getUuid} from './getUuid';
import {formatDate} from './formatDate';
import {countDown} from './countDown';


/**
 * @description 元素添加类
 */
function addClass(ele, className) {
    ele.classList.add(className)
}
/**
 * 元素移除类
 */

function removeClass(ele, className) {
    ele.classList.remove(className)
}
/**
 * 切换类
 */
function toggleClass(ele, className) {
    ele.classList.toggle(className)
}
/**
 * 判断包含某个类
 */
function hasClass(el, className) {
    el.classList.contains(className)
}

export default{
    rndNum,
    drawVeryCode,
    getUuid,
    formatDate,
    countDown,
    addClass,
    removeClass,
    hasClass,
    toggleClass
}

