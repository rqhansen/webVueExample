<template>
  <div class="rq-home-hot">
    <header>热门彩票</header>
    <div>
      <ul>
        <li v-for="item of lotteryList"
            :key="item.id"
            class="touch-feedback"
            v-feedBackClick>
          <dl>
            <dt><img :src="item.lotteryIcon"
                   alt=""></dt>
            <dd>
              <p>{{item.lotteryName}}</p>
              <p>{{item.prizeInterval}}</p>
            </dd>
          </dl>
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
  dl {
    display: flex;
    height: 96px;
    dd {
      @extend dl;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 20px;
      font-size: 22px;
      p {
        &:first-child {
          font-size: 32px;
        }
        &:last-child {
          color: #999;
        }
      }
    }
    img {
      width: 96px;
      height: 96px;
      vertical-align: top;
    }
  }
}
</style>
