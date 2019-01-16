<template>
  <div class="detail-content-header">
    <flex-layout class="lottery-detail">
      <img :src="lottery.lotteryIcon"
           slot="title">
      <div slot="top">
        <p class="name"><span>{{lottery.lotteryName}}</span><span v-if="lottery.selfFlag==='0'"
                class="tip">官方开奖</span></p>
        <p>{{lottery.periodNo}}</p>
      </div>
      <div slot="center"
           class="open-prize">即将开奖</div>
    </flex-layout>
  </div>
</template>

<script>
export default {
  props: ['lottery']
}
</script>

<style lang="scss" scoped>
.detail-content-header {
  height: 150px;
  padding: 8px 25px;
  background-color: #f3f3f3;
  .lottery-detail {
    /deep/ dd {
      flex: 1;
      margin-left: 15px;
      font-size: 30px;
      flex-direction: row;
      justify-content: space-between;
      .open-prize {
        color: #ec0022;
      }
      .name {
        height: 44px;
        line-height: 44px;
        span {
          display: inline-block;
          &:first-child {
            font-size: 32px;
            color: #ec0022;
          }
          &.tip {
            position: relative;
            top: -2px;
            height: 44px;
            padding: 0 5px;
            line-height: 44px;
            margin-left: 25px;
            border: 1px solid #2d8cf0;
            color: #ec0022;
            text-align: center;
            border-radius: 6px;
          }
        }
        & + p {
          color: #868484;
          font-size: 26px;
        }
      }
    }
    img {
      width: 80px;
      height: 80px;
    }
  }
}
</style>
