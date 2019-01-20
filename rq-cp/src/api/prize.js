import axios from '@/assets/js/axios'

export function getPrizeList() {
    return axios('ajax/prize/prize.json', {
        noEncrypt: true
    })
}
