<template>
  <div class="rq-login-register">
    <!-- 头部 -->
    <vux-header :hasBack="true">
      <span slot="center">注册</span>
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
          <input :type="isClose?'password':'text'"
                 ref="checkPassword"
                 v-model.trim="userInfo.checkPassWord"
                 maxlength="12"
                 min="6"
                 @focus="itemIndex=2"
                 @blur="blurIpt(2)"
                 placeholder="请输入确认密码">
          <svg-icon icon-class="close"
                    className="icon-clear"
                    v-if="itemIndex===2"
                    @click.native="$set(userInfo,'checkPassWord','');$refs['checkPassword'].focus();"></svg-icon>
          <svg-icon :icon-class="
                    isCheckClose?'close_eyes':'open_eyes'"
                    @click.native="isCheckClose=!isCheckClose;"></svg-icon>
          <div class="error-tip"
               v-if="!validate.valiCheckPassWord"><span>六至十四位字母数字组合</span></div>
          <div class="error-tip"
               v-if="!validate.valiEqual"><span>前后密码输入不一致</span></div>
        </div>
        <div class="field-item"
             :class="{'active':itemIndex===3}">
          <input type="text"
                 v-model.trim="userInfo.veryCode"
                 maxlength="4"
                 min="4"
                 @focus="itemIndex=3"
                 @blur="blurIpt(3)"
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
                      @click="register">注册</van-button>
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
import common from './common'
import encryption from '@/assets/js/md5'
export default {
  name: 'register',
  mixins: [common],
  data () {
    return {
      isCheckClose: true,
      userInfo: {
        checkPassWord: ''
      },
      validate: {
        valiCheckPassWord: true,
        valiEqual: true
      }
    }
  },
  methods: {
    validateCheckPassWord () { //验证确认密码
      let valiCheck = /^\w{6,14}$/.test(this.userInfo.checkPassWord) ? false : true;
      if (valiCheck) { //不符合6至十四位
        this.validate.valiCheckPassWord = false;
        this.validate.valiEqual = true;
        return true;
      }
      if (this.userInfo.passWord !== this.userInfo.checkPassWord) { //验证前后密码输入是否一致
        this.validate.valiEqual = false;
        this.validate.valiCheckPassWord = true;
        return true;
      }
      return false;
    },
    blurIpt (idx) {
      this.itemIndex = -1
      switch (idx) {
        case 0:
          this.validate.valiUserName = this.validateUserName();
          break
        case 1:
          this.validate.valiPassWord = this.validatePassWord();
          break
        case 2: //验证确认密码
          this.validate.valiCheckPassWord = true;
          this.validate.valiEqual = true;
          this.validateCheckPassWord();
          break;
        case 3:
          this.validate.valiVeryCode = this.validateCode()
          if (this.validate.valiVeryCode) {
            this.changeVeryCode()
          }
          break
        default:
          break
      }
    },
    registerValidate () { //注册验证
      if (
        !this.validateUserName() &&
        !this.validatePassWord() &&
        !this.validateCode() && !this.validateCheckPassWord()
      ) {
        return true
      }
      return false
    },
    register () {
      if (!this.registerValidate()) { //正则验证不通过
        return
      } else if (this.veryCode !== this.userInfo.veryCode.toLowerCase()) { //验证码不正确
        this.$dialog.alert({
          title: '温馨提示',
          message: '验证码不正确'
        })
        this.changeVeryCode();
      } else {
        this.showLoading = true
        //发送ajax请求,返回用户信息并存储到vuex和localStorage
        this.SAVE_USER(this.userInfo);
        setTimeout(() => { this.showLoading = false; this.$router.push({ name: 'home' }) }, 500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./common.scss";
.rq-login-register {
  .login-register-field {
    height: 666px;
  }
}
</style>
