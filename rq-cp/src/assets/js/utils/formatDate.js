/**
 *
 * @description 格式化日期
 */
export function formatDate(time, type) {
    if (typeof time === 'string') {
        time = time.replace(/-/g, '/')
    }
    time = Number(time)
    let date = new Date(time)
    let str = ''
    let dateArr = [
        date.getFullYear(),
        '-',
        date.getMonth() + 1,
        '-',
        date.getDate()
    ]
    let timeArr = [
        date.getHours(),
        ':',
        date.getMinutes(),
        ':',
        date.getSeconds()
    ]
    let timeArr2 = [date.getHours(), ':', date.getMinutes()]
    dateArr.forEach(item => {
        if (typeof item === 'number' && item < 10) item = '0' + item
        str += item
    })
    if (type === 'yymmddhhmmss') {
        str += ' '
        timeArr.forEach(item => {
            if (typeof item === 'number' && item < 10) item = '0' + item
            str += item
        })
    }
    if (type === 'hhmm') {
        str = ''
        timeArr2.forEach(item => {
            item = item == 0 ? '00' : item
            str += item
        })
    }
    return str
}
