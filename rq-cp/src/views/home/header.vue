<template>
  <div class="rq-home-header">
    <div>
      <span>登录</span>
    </div>
    <div class="rq-logo">
      <img src="../../assets/img/logo.png"
           alt="">
    </div>
    <div>
      <span>注册</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.rq-home-header {
  display: flex;
  align-items: center;
  height: 88px;
  padding: 0 20px;
  font-size: 32px;
  color: #fff;
  background-color: #ec0022;
  overflow: hidden;
  .rq-logo {
    flex: 1;
    text-align: center;
  }
  img {
    height: 72px;
  }
}
</style>
