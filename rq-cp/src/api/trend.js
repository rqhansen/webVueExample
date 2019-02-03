import axios from '@/assets/js/axios'

/**
 * 获取彩种走势类型
 */
export function getAllDisplays(lotteryId) {
    return axios(`ajax/trend/allDisplays/${lotteryId}.json`, {
        noEncrypt: true
    })
}
