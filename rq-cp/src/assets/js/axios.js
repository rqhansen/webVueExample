import Vue from 'vue'
import axios from 'axios'
import encryption from 'public/js/md5.js'
import util from './util.js'

//请求拦截器
axios.interceptors.request.use(
    function(config) {
        let [time, user, userId, sign] = [
            new Date().getTime(),
            localStorage.getItem('user'),
            '',
            ''
        ]
        //登陆后更改userID
        if (user) {
            user = JSON.parse(user)
            userId = user.userId
        }
        sign = encryption.encrypt.md5(time + '##Lottery2017$$')
        if (config.userId) {
            if (user) {
                sign = encryption.encrypt.md5(
                    time + '##Lottery2017$$' + user.token
                )
            } else {
                config.url = '/'
                Dialog.confirm({
                    title: '温馨提示',
                    message: '您还没有登录,立即登录?'
                })
                    .then(() => {
                        window.location.href = '/login'
                    })
                    .catch(() => {
                        //on cancel
                    })
                return config
            }
        }
        //参数加密
        if (!config.noEncrypt) {
            let key = util.rndNum(16)
            config.key = key
            config.headers.key = RSA(key)
            config.data = {
                body: AESEnc(key, JSON.stringify(config.data))
            }
        }
        config.headers.sign = sign
        config.headers.timestamp = time + ''
        config.headers.userId = userId || ''
        config.headers.deviceId = util.getUuid(32, 32)
        if (config.tx) {
            config.headers.tx = true
        }
        if (config.contentType) {
            config.headers.contentType = config.contentType
        }
        return config
    },
    function(error) {
        //对请求错误做些什么
        return Promise.reject(error)
    }
)

//响应拦截器
axios.interceptors.response.use(
    function(response) {
        let code = response.data.code
        if (!code) {
            //如果响应异常
            if (!response.config.noEncrypt) {
                response.data = JSON.parse(
                    AESDec(response.config.key, response.data.body)
                )
            }
            return response
        }
        let errText = response.data.msg || '服务异常'
        let clientType = localStorage.getItem('loginClientType') //设备类型
        if (!clientType) clientType = 'wap'
        if (
            code === 110 ||
            code === 111 ||
            code === 170 ||
            code === 301 ||
            code === 302 ||
            code === 503
        ) {
            if (clientType === 'android') {
                //如果是原生android访问，直接调用原生的方法
                if (window.AndroidLoginUtil) {
                    window.AndroidLoginUtil.jumpLogin(errText)
                }
                return
            }
            if (clientType === 'ios') {
                return (window.location.href = 'objc://action=login')
            }
            //清空登录缓存
            // store.commit("getUser", {});
            // localStorage.setItem("user", "");
            if (!response.config.noDialogTip) {
                Dialog.confirm({
                    title: '温馨提示',
                    message: errText
                })
                    .then(() => {
                        window.location.href = '/login'
                    })
                    .catch(() => {
                        //on cancel
                    })
            }
        }
        return response
    },
    function(error) {
        //响应错误时做些事
        return Promise.reject(error)
    }
)

Vue.prototype.$http = axios
export default axios
