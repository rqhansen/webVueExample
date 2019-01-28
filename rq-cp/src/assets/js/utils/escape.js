/**
 * 将数据解析为html的字符串形式
 */
export function escapeHtml(str) {
    var arrEntities = {
        lt: '<',
        gt: '>',
        nbsp: ' ',
        amp: '&',
        quot: '"'
    }
    return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function(all, t) {
        return arrEntities[t]
    })
}
