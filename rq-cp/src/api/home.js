import axios from '@/assets/js/axios'

/**
 *
 * @descript 获取轮播数据
 */
export function getBanners(data) {
    return axios('ajax/home/banner.json', {
        methods: 'get',
        noEncrypt: false,
        data: data
    })
}

/**
 *
 * @description 获取快捷导航菜单
 */
export function getNavsMenu(data) {
    return axios('ajax/home/navigation.json', {
        methods: 'get',
        noEncrypt: false,
        data: data
    })
}
/**
 * 获取热门排行
 */
export function getHotList(data) {
    return axios('ajax/home/hot.json', {
        methods: 'get',
        noEncrypt: true,
        data: data
    })
}

/**
 * 获取中奖排行榜
 */
export function getPrizeList(data) {
    return axios('ajax/home/prizeRank.json', {
        methods: 'get',
        noEncrypt: false,
        data: data
    })
}
