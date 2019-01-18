import Vue from 'vue'
import utils from '@/assets/js/utils/index'

Vue.filter('formatDate', function(val) {
    if (!val) return
    return utils.formatDate(`${val}`, 'yymmddhhmmss')
})
