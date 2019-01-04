/**
 *
 * @param {随机n位字符} n
 */
function rndNum(n) {
    let [rnd, x] = ['', '0123456789qwertyuioplkjhgfdsazxcvbnm']
    for (let i = 0; i < n; i++) {
        let num = Math.round(Math.random() * 36)
        if (num === 36) num--
        rnd += x.substring(num, num + 1)
    }
    return rnd
}

/**
 * 获取uuid
 * @param {*} len
 * @param {*} radix
 */
function getUuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(
        ''
    )
    var uuid = [],
        i
    radix = radix || chars.length
    if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
    } else {
        var r
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
        uuid[14] = '4'
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | (Math.random() * 16)
                uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r]
            }
        }
    }
    return uuid.join('')
}
/**
 *@description 判断元素是否包含某个类
 */
// function hasClass(ele, className) {
//     let reg = new RegExp(`(^|\\s)${className}(\\s|$)`)
//     return reg.test(el.className)
// }
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
    console.log(className)
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
export default {
    rndNum,
    getUuid,
    addClass,
    removeClass,
    hasClass,
    toggleClass
}
