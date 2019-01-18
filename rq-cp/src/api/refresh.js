import Vue from 'vue'
/**
 * @param {Function} asyncFun 异步函数
 * @param {String} tip 异步函数执行完后的提示语
 */
function pageFresh(asyncFun, tip) {
    return new Promise((resolve, reject) => {
        asyncFun().then(() => {
            alert(tip)
            resolve()
        })
    })
}
Vue.prototype.$refresh = pageFresh
