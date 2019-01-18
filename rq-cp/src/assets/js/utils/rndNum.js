/**
 *
 * @param {随机n位字符} n
 */
export function rndNum(n) {
    let [rnd, x] = ['', '0123456789qwertyuioplkjhgfdsazxcvbnm']
    for (let i = 0; i < n; i++) {
        let num = Math.round(Math.random() * 36)
        if (num === 36) num--
        rnd += x.substring(num, num + 1)
    }
    return rnd
}
