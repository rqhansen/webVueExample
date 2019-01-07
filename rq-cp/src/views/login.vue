<template>
  <div class="rq-login">
    <vux-header :hasBack="true">
      <span slot="center">登录</span>
    </vux-header>
    <section>
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
                 v-model="userInfo.userName"
                 @focus="itemIndex=0"
                 @blur="itemIndex=-1"
                 placeholder="请输入用户名">
          <svg-icon icon-class="close"
                    v-if="itemIndex===0"
                    @click.native="$set(userInfo, 'userName', '');$refs['user-name'].focus();"></svg-icon>
        </div>
        <div class="field-item"
             :class="{'active':itemIndex===1}">
          <input :type="isClose?'password':'text'"
                 ref="password"
                 v-model="userInfo.passWord"
                 maxlength="12"
                 min="6"
                 @focus="itemIndex=1"
                 @blur="itemIndex=-1"
                 placeholder="请输入密码">
          <svg-icon icon-class="close"
                    className="icon-clear"
                    v-if="itemIndex===1"
                    @click.native="$set(userInfo,'passWord','');$refs['password'].focus();"></svg-icon>
          <svg-icon :icon-class="
                    isClose?'close_eyes':'open_eyes'"
                    @click.native="isClose=!isClose;"></svg-icon>
        </div>
        <div class="field-item"
             :class="{'active':itemIndex===2}">
          <input type="text"
                 v-model="userInfo.code"
                 maxlength="4"
                 min="4"
                 @focus="itemIndex=2"
                 @blur="itemIndex=-1"
                 placeholder="请输入验证码" />
          <canvas width="100"
                  height="40"
                  id="canvas"
                  @click="changeVeryCode"></canvas>
        </div>
        <div class="btn-wrapper">
          <van-button round
                      size="large"
                      type="warning">登陆</van-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import drawVeryCode from '@/assets/js/drawVeryCode.js'
export default {
  name: 'login',
  data () {
    return {
      itemIndex: -1,
      isClose: true,
      veryCode: '',
      userInfo: {
        userName: '',
        passWord: ''
      }
    }
  },
  methods: {
    /**
     * 模拟后端生成验证码
     */
    changeVeryCode () {
      this.veryCode = drawVeryCode('canvas');
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
  .login-logo {
    width: 100%;
    height: 184px;
    background-color: #ec0022;
    text-align: center;
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
  /deep/ .van-button--large {
    height: 84px;
    margin-top: 20px;
    font-size: 36px;
  }
}
</style>
