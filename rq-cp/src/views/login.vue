<template>
  <div class="rq-login">
    <!-- 头部 -->
    <vux-header :hasBack="true">
      <span slot="center">登录</span>
    </vux-header>
    <section class="login-wrapper">
      <!-- logo -->
      <div class="login-logo">
        <img src="/static/img/logo.png"
             alt="">
      </div>
      <!-- 三角图案 -->
      <div class="login-triangle"></div>
      <!-- 表单 -->
      <div class="login-field">
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
        <div class="login-btn">
          <van-button round
                      size="large"
                      type="warning"
                      :disabled="allowClick"
                      @click="login">登陆</van-button>
        </div>
        <div class="login-tip">
          <span>快速注册</span>
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
import drawVeryCode from '@/assets/js/drawVeryCode.js'
import encryption from "@/assets/js/md5";
import { mapMutations } from 'vuex'
export default {
  name: 'login',
  data () {
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
    allowClick () { //按钮是否禁用
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
    validateUserName () { //验证用户名
      return /^[a-zA-Z]\w{5,11}$/.test(this.userInfo.userName) ? false : true
    },
    validatePassWord () { //验证密码
      return /^\w{6,14}$/.test(this.userInfo.passWord) ? false : true
    },
    validateCode () { //验证验证码
      return this.userInfo.veryCode ? false : true
    },
    loginValidate () { //登录验证
      if (!this.validateUserName() && !this.validatePassWord() && !this.validateCode()) {
        return true;
      }
      return false;
    },
    blurIpt (idx) {
      this.itemIndex = -1;
      switch (idx) {
        case 0:
          this.validate.valiUserName = this.validateUserName();
          break;
        case 1:
          this.validate.valiPassWord = this.validatePassWord();
          break;
        case 2:
          this.validate.valiVeryCode = this.validateCode();
          if (this.validate.valiVeryCode) {
            this.changeVeryCode();
          }
          break;
        default:
          break;
      }
    },
    /**
     * 模拟后端生成验证码
     */
    changeVeryCode () {
      this.veryCode = drawVeryCode('canvas');
    },
    /**
     * 登录
     */
    login () {
      if (this.loginValidate() && this.veryCode === this.userInfo.veryCode.toLowerCase()) {
        this.showLoading = true;
        this.userInfo.passWord = encryption.encrypt.md5(this.userInfo.passWord);
        //发送ajax请求,返回用户信息并存储到vuex和localStorage
        this.SAVE_USER(this.userInfo);
        localStorage.setItem('user', JSON.stringify(this.userInfo));
        setTimeout(() => { this.showLoading = false; this.$router.push({ name: 'home' }) }, 1000)
      } else {
        this.$dialog.alert({
          title: '登录提示',
          message: '验证码不正确'
        })
        this.changeVeryCode();
      }
    }
  },
  mounted () {
    this.changeVeryCode()
  }
}
</script>

<style  lang="scss" scoped>
@import "../assets/scss/animation.scss";
.rq-login {
  position: relative;
  .login-logo {
    width: 100%;
    height: 184px;
    background-color: #ec0022;
    text-align: center;
  }
  .login-wrapper {
    height: calc(100vh - 88px);
  }
  .login-triangle {
    width: 0;
    height: 0;
    border-top: 102px solid #ec0022;
    border-left: 375px solid transparent;
    border-right: 375px solid transparent;
  }
  .login-field {
    position: relative;
    top: -100px;
    z-index: 2;
    width: 620px;
    height: 590px;
    padding: 60px 20px;
    margin: 0 auto;
    box-shadow: 0 0.15rem 0.7rem 0.15rem #dfdfdf;
    border-radius: 20px;
    background-color: #fff;
    font-size: 30px;
  }
  .field-item {
    position: relative;
    height: 76px;
    padding: 15px 0;
    margin-bottom: 36px;
    input {
      height: 100%;
      color: #222;
      caret-color: #ec0022;
    }
    .svg-icon {
      position: absolute;
      right: 20px;
      top: 22px;
      font-size: 40px;
    }
    #canvas {
      width: 100px;
      height: 50px;
      @extend .svg-icon;
      top: 13px;
    }
    .icon-clear {
      right: 80px;
    }
    &:after {
      position: absolute;
      display: block;
      content: "";
      left: 0;
      top: 75px;
      width: 100%;
      height: 1px;
      background-color: #efefef;
    }
    &.active {
      &:after {
        $an1: (
          transform: scaleX(0)
        );
        $an2: (
          transform: scaleX(1)
        );
        $transWidth: (
          0%: $an1,
          100%: $an2
        );
        @include keyframes(transWidth, $transWidth);
        @include animation(transWidth 0.3s);
        background-color: #ec0022;
      }
    }
  }
  .login-tip {
    padding-top: 20px;
    font-size: 24px;
    color: #999;
  }
  /deep/ .van-button--large {
    height: 84px;
    margin-top: 20px;
  }
  .error-tip {
    position: absolute;
    top: 80px;
    font-size: 24px;
    color: #ec0022;
  }
}
</style>
