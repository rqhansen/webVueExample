<template>
  <div class="rq-login-register">
    <!-- 头部 -->
    <vux-header :hasBack="true"
                @click-left="$router.go(-1)">
      <span slot="center">登录</span>
    </vux-header>

    <section class="login-register-wrapper">
      <!-- logo -->
      <div class="login-register-logo">
        <img src="/static/img/logo.png"
             alt="">
      </div>
      <!-- 三角图案 -->
      <div class="login-register-triangle"></div>
      <!-- 表单 -->
      <div class="login-register-field">
        <div class="field-item"
             :class="{'active':itemIndex===0}">
          <input type="text"
                 ref="user-name"
                 maxlength="12"
                 min="6"
                 checked
                 v-model.trim="userInfo.userName"
                 @focus="itemIndex=0"
                 @blur="blurIpt(0)"
                 placeholder="请输入用户名">
          <svg-icon icon-class="close"
                    v-if="itemIndex===0"
                    @click.native="$set(userInfo, 'userName', '');$refs['user-name'].focus();"></svg-icon>
          <div class="error-tip"
               v-if="validate.valiUserName"><span>六至十二位字母数字组合</span></div>
        </div>
        <div class="field-item"
             :class="{'active':itemIndex===1}">
          <input :type="isClose?'password':'text'"
                 ref="password"
                 v-model.trim="userInfo.passWord"
                 maxlength="12"
                 min="6"
                 @focus="itemIndex=1"
                 @blur="blurIpt(1)"
                 placeholder="请输入密码">
          <svg-icon icon-class="close"
                    className="icon-clear"
                    v-if="itemIndex===1"
                    @click.native="$set(userInfo,'passWord','');$refs['password'].focus();"></svg-icon>
          <svg-icon :icon-class="
                    isClose?'close_eyes':'open_eyes'"
                    @click.native="isClose=!isClose;"></svg-icon>
          <div class="error-tip"
               v-if="validate.valiPassWord"><span>六至十四位字母数字组合</span></div>
        </div>
        <div class="field-item"
             :class="{'active':itemIndex===2}">
          <input type="text"
                 v-model.trim="userInfo.veryCode"
                 maxlength="4"
                 min="4"
                 @focus="itemIndex=2"
                 @blur="blurIpt(2)"
                 placeholder="请输入验证码" />
          <canvas width="100"
                  height="40"
                  id="canvas"
                  @click="changeVeryCode"></canvas>
          <div class="error-tip"
               v-if="validate.valiVeryCode"><span>请输入验证码</span></div>
        </div>
        <div class="login-register-btn">
          <van-button round
                      size="large"
                      type="warning"
                      :disabled="allowClick"
                      @click="login">登录</van-button>
        </div>
        <div class="login-register-tip">
          <span @click="register">快速注册</span>
        </div>
      </div>
    </section>
    <van-loading v-if="showLoading"
                 type="spinner"
                 color="white"
                 size="160px" />
  </div>
</template>

<script>
import encryption from '@/assets/js/md5'
import common from './common'
import { mapGetters } from 'vuex'
export default {
  name: 'login',
  mixins: [common],
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    blurIpt (idx) {
      this.itemIndex = -1
      switch (idx) {
        case 0:
          this.validate.valiUserName = this.validateUserName()
          break
        case 1:
          this.validate.valiPassWord = this.validatePassWord()
          break
        case 2:
          this.validate.valiVeryCode = this.validateCode()
          if (this.validate.valiVeryCode) {
            this.changeVeryCode()
          }
          break
        default:
          break
      }
    },
    loginValidate () {
      //登录验证
      if (
        !this.validateUserName() &&
        !this.validatePassWord() &&
        !this.validateCode()
      ) {
        return true
      }
      return false
    },
    login () { //登录
      if (!this.loginValidate()) { //正则验证不通过
        return
      } else if (this.veryCode !== this.userInfo.veryCode.toLowerCase()) {
        this.$dialog.alert({
          title: '温馨提示',
          message: '验证码不正确'
        })
        this.changeVeryCode();
      } else {
        if (this.user.userName) {
          this.$dialog.confirm({
            title: '温馨提示',
            message: '当前已登录,是否切换账号'
          }).then(() => {
            this.showLoading = true;
            //发送ajax请求...
            this.SAVE_USER(this.userInfo);
            setTimeout(() => { this.showLoading = false; this.$router.push({ name: 'home' }) }, 500)
          }).catch(() => {
            // on cancel
          });
        }
      }
    },
    /**
     * 注册
     */
    register () {
      this.$router.push({ name: 'register' });
    }
  }
}
</script>

<style  lang="scss" scoped>
@import "./common.scss";
</style>
