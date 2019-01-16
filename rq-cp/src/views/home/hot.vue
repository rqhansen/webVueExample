<template>
  <div class="rq-home-hot">
    <header>热门彩票</header>
    <div>
      <ul>
        <li v-for="item of lotteryList"
            :key="item.id"
            class="touch-feedback"
            v-feedBackClick>
          <flex-layout class="hot-lottery">
            <img :src="item.lotteryIcon"
                 slot="title">
            <p slot="top">{{item.lotteryName}}</p>
            <p slot="center">{{item.prizeInterval}}</p>
          </flex-layout>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "hot",
  props: ["lotteryList"]
}
</script>

<style lang="scss" scoped>
$border-attr: 1px solid #eee;
$br: border-right;
$bt: border-bottom;
.rq-home-hot {
  header {
    height: 80px;
    padding-left: 25px;
    line-height: 80px;
    font-size: 30px;
    color: #747474;
    #{$bt}: $border-attr;
  }
  ul {
    width: 100%;
    font-size: 0;
  }
  li {
    width: 50%;
    height: 136px;
    display: inline-block;
    text-align: center;
    padding: 20px;
    overflow: hidden;
    &:not(:last-child) {
      #{$bt}: $border-attr;
    }
    &:not(:nth-child(2n)) {
      #{$br}: $border-attr;
    }
    &:nth-last-child(2) {
      #{$bt}: none;
    }
  }
  .hot-lottery {
    /deep/ dd {
      margin-left: 20px;
    }
    img {
      width: 96px;
      height: 96px;
    }
    p {
      font-size: 32px;
      width: 100%;
      text-align: left;
      font-size: 22px;
      &:first-child {
        font-size: 32px;
      }
      &:last-child {
        color: #999;
      }
    }
  }
}
</style>
