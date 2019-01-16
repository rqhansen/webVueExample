import Vue from 'vue'
import util from '@/assets/js/util'

Vue.filter('formatDate', function(val) {
    if (!val) return
    return util.formatDate(`${val}`, 'yymmddhhmmss')
})
