//绘制验证码
function drawVeryCode(canvasId) {
    let canvas = document.getElementById(canvasId)
    let ctx = canvas.getContext('2d')
    //指定范围的随机数
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    //随机生成字符
    function randomString() {
        let code = ''
        let source = '012345789ascdefgqwrtyuioplkjghmnvczx'
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * source.length)
            code += source.charAt(index)
        }
        return code
    }
    //绘图
    function drawString(code) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.font = '30px Helvetica Neue'
        ctx.textBaseline = 'top'
        //绘制点状背景
        for (let i = 0; i < 70; i++) {
            let r = randomNumber(0, 255)
            let g = randomNumber(0, 255)
            let b = randomNumber(0, 250)
            let w = randomNumber(0, canvas.width)
            let h = randomNumber(0, canvas.height)
            let round = randomNumber(0, 1) / 2
            ctx.beginPath()
            ctx.fillStyle = `rgb(${r},${g},${b})`
            ctx.arc(w, h, round, 0, 2 * Math.PI)
            ctx.closePath()
            ctx.fill()
        }
        //绘制文字
        for (let i = 0; i < code.length; i++) {
            let r = randomNumber(0, 255)
            let g = randomNumber(0, 255)
            let b = randomNumber(0, 255)
            let h = randomNumber(0, canvas.height - 50)
            ctx.fillStyle = `rgba(${r},${g},${b})` //设置文字颜色
            ctx.fillText(code.charAt(i), 10 + i * 18, h) //绘制文字
        }
        //绘制穿越线
        for (let i = 0; i < 15; i++) {
            let x1 = randomNumber(0, canvas.width)
            let y1 = randomNumber(0, canvas.height)
            let x2 = randomNumber(0, canvas.width)
            let y2 = randomNumber(0, canvas.height)
            ctx.strokeStyle = '#ddd' //绘制笔触的颜色
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.closePath()
            ctx.stroke()
        }
        return code
    }
    return drawString(randomString())
}
export default drawVeryCode
