<template>
  <div class="rq-home-header">
    <vux-header :hasBack="false"
                leftUrl="login"
                rightUrl="register">
      <span slot="left">登录</span>
      <img slot="center"
           src="../../assets/img/logo.png"
           height="72px" />
      <span slot="right">注册</span>
    </vux-header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>
