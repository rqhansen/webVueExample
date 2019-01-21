import Vue from 'vue'
/**
 * @param {Function} asyncFun 返回Promise的函数
 * @param {String} tip 配置提示语
 */

Vue.prototype.$refresh = function(asyncFun, config) {
    return new Promise((resolve, reject) => {
        asyncFun().then(() => {
            let { tip } = config
            alert(tip ? tip : '刷新数据成功')
            resolve()
        })
    })
}
