import utils from '@/assets/js/utils/index'
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            itemIndex: -1,
            isClose: true,
            veryCode: '',
            userInfo: {
                userName: '',
                passWord: '',
                veryCode: ''
            },
            validate: {
                valiUserName: '',
                valiPassWord: '',
                valiVeryCode: ''
            },
            showLoading: false
        }
    },
    computed: {
        allowClick() {
            //按钮是否禁用
            for (let val of Object.values(this.userInfo)) {
                if (!val) {
                    return true
                }
            }
            return false
        }
    },
    methods: {
        ...mapMutations(['SAVE_USER']),
        validateUserName() {
            //验证用户名
            return /^[a-zA-Z]\w{5,11}$/.test(this.userInfo.userName)
                ? false
                : true
        },
        validatePassWord() {
            //验证密码
            return /^\w{6,14}$/.test(this.userInfo.passWord) ? false : true
        },
        validateCode() {
            //验证验证码
            return this.userInfo.veryCode ? false : true
        },
        /**
         * 模拟后端生成验证码
         */
        changeVeryCode() {
            this.veryCode = utils.drawVeryCode('canvas')
        }
    },
    mounted() {
        this.changeVeryCode()
       
    }
}
