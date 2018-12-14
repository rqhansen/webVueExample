<template>
  <div class="rq-home">
    <!-- 页头 -->
    <header class="rq-home-header">
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
    <!-- 轮播 -->
    <van-swipe :autoplay="3000"
               indicator-color="#fc7716">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "home",
  components: {
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem
  }
  // created () {

  // }
};
</script>

<style lang="scss">
.rq-home {
  &-header {
    display: flex;
    align-items: center;
    height: 88px;
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
