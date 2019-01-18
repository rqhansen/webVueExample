/**
 * @description 计算倒计时
 * diffTime毫秒值
 */
export function countDown(diffTime) {
    let obj = {}
    obj.hours = Math.floor(diffTime / (3600 * 1000)) //小时
    let leaveDiff = diffTime % (3600 * 1000)
    obj.minutes = Math.floor(leaveDiff / (60 * 1000)) //分钟
    let leaveDiff2 = leaveDiff % (60 * 1000)
    obj.seconds = Math.floor(leaveDiff2 / 1000) //秒
    for (let key of Object.keys(obj)) {
        if (obj[key] < 10) obj[key] = `0${obj[key]}`
    }
    return obj
}
