import axios from '@/assets/js/axios'

/**
 * 获取所有彩种类型
 */
export function getAllLotteryTypes() {
    return axios('ajax/lottery/allLotteryTypes.json', { noEncrypt: true })
}
