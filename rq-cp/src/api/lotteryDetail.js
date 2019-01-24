import axios from '@/assets/js/axios'

export function getDefaultPlay(id) {
    return axios(`ajax/lotteryDetail/${id}.json`, {
        noEncrypt: true
    })
}
