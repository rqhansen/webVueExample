<template>
  <div class="not-found">
    <div class="cont">
      <div><img src="@/assets/img/404.png"
             alt=""></div>
      <div class="sorry">抱歉，你访问的页面不存在</div>
      <div class="second">
        <span class="font-red">
          <strong>{{num}}</strong>s</span>&nbsp;后自动跳转回首页</div>
      <div class="go-back">
        <van-button size="large"
                    type="primary"
                    @click='$router.push("/")'>返回首页</van-button>
      </div>

    </div>
  </div>
</template>

<script>
let timer;
export default {
  data () {
    return {
      num: 5,
      timer: ''
    }
  },
  mounted () {
    let vm = this;
    timer = setInterval(() => {
      vm.num--
      if (vm.num <= 0) {
        clearInterval(timer);
        vm.$router.push('/');
      }
    }, 1000)
  },
  destroyed () {
    clearInterval(timer);
  }
}
</script>
<style lang="scss" scoped>
.not-found {
  height: 100vh;
  .cont {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    font-size: 40px;
    img {
      margin-bottom: 20px;
    }
    .second {
      margin: 20px 0;
      font-size: 26px;
    }
    .font-red {
      color: #757575;
    }
    strong {
      color: #ec0022;
    }
    /deep/ .van-button {
      width: 490px;
      height: 64px;
      line-height: 64px;
      text-align: center;
      font-size: 30px !important;
      color: #fff;
      background-color: #ec0022;
      border-color: #ec0022;
    }
  }
}
</style>

