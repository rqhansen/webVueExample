import utils from '@/assets/js/utils/index'

export function formatDate(val) {
    if (!val) return
    return utils.formatDate(`${val}`, 'yymmddhhmmss')
}
