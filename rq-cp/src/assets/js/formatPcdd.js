/**
 * 大小： 14-21为大，6-13为小
 *
 */
const PC_DD = [{
        color: 'green',
        data: [1, 4, 7, 10, 16, 19, 22, 25],
        desc: [
            '小 | 单',
            '小 | 双',
            '小 | 单',
            '小 | 双',
            '大 | 双',
            '大 | 单',
            '大 | 双',
            '大 | 单'
        ]
    },
    {
        color: 'blue',
        data: [2, 5, 8, 11, 17, 20, 23, 26],
        desc: [
            '小 | 双',
            '小 | 单',
            '小 | 双',
            '小 | 单',
            '大 | 单',
            '大 | 双',
            '大 | 单',
            '大 | 双'
        ]
    },
    {
        color: 'red',
        data: [3, 6, 9, 12, 15, 18, 21, 24],
        desc: [
            '小 | 单',
            '小 | 双',
            '小 | 单',
            '小 | 双',
            '大 | 单',
            '大 | 双',
            '大 | 单',
            '大 | 双'
        ]
    },
    {
        color: 'other',
        data: [0, 13, 14, 27],
        desc: ['小 | 双', '小 | 单', '大 | 双', '大 | 单']
    }
]

function formatPcdd(balls) {
    //球号的数组
    let ballsInfo = []
    let sum = 0
    balls.forEach((ball, index) => {
        sum += parseInt(ball)
        if (index < 2) {
            ballsInfo.push({
                content: ball
            }, {
                content: '+'
            })
        } else {
            ballsInfo.push({
                content: ball
            }, {
                content: '='
            })
        }
    })
    PC_DD.forEach(item => {
        item.data.forEach((ball, index) => {
            if (sum === ball) {
                ballsInfo.push({
                    content: sum,
                    clr: item.color,
                    desc: item.desc[index]
                })
            }
        })
    })
    return ballsInfo
}

export default formatPcdd