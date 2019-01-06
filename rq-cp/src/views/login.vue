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
      <div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style  lang="scss" scoped>
.rq-login {
  .login-logo {
    width: 100%;
    height: 184px;
    padding-top: 46px;
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
}
</style>
