import axios from '@/assets/js/axios'

/**
 *
 * @param {彩种Id} id
 */
export function getPrizeDetail(id) {
    return axios(`/ajax/prizeDetail/${id}.json`, { noEncrypt: true })
}
