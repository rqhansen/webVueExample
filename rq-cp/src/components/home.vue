<template>
  <div class="rq-main">
    <header class="rq-main-header">
      <div>
        <span>登录</span>
      </div>
      <div class="rq-logo">
        <img src="../assets/logo.png"
             alt="">
      </div>
      <div>
        <span>注册</span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss">
.rq-main {
  .rq-main-header {
    height: 88px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-size: 32px;
    color: #fff;
    background-color: #ec0022;
    .rq-logo {
      flex: 1;
      text-align: center;
    }
    img {
      height: 72px;
    }
  }
}
</style>
