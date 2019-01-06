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
                 maxlength="12"
                 min="6"
                 checked
                 @focus="itemIndex=0"
                 @blur="itemIndex=-1"
                 placeholder="请输入用户名">
          <svg-icon icon-class="close_eyes"></svg-icon>
        </div>
        <div class="field-item"
             :class="{'active':itemIndex===1}">
          <input type="password"
                 maxlength="12"
                 min="6"
                 @focus="itemIndex=1"
                 @blur="itemIndex=-1"
                 placeholder="请输入密码">
          <svg-icon icon-class="open_eyes"></svg-icon>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      itemIndex: -1,
      userInfo: {
        username: '',
        phone: ''
      }
    }
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
    box-shadow: 0 0.15rem 0.7rem 0.15rem #dfdfdf;
    border-radius: 20px;
    margin: 0 auto;
    background-color: #fff;
    font-size: 30px;
  }
  .field-item {
    position: relative;
    height: 76px;
    padding: 15px 30px 15px 0;
    margin-bottom: 36px;
    input {
      width: 100%;
      height: 100%;
      color: #222;
      caret-color: #ec0022;
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
        @include animation(transWidth 0.2s);
        background-color: #ec0022;
      }
    }
  }
}
</style>
