<template>
  <div class="detail-content-header">
    <dl>
      <dt>
        <img :src="lottery.lotteryIcon">
      </dt>
      <dd>
        <div>
          <p class="name"><span>{{lottery.lotteryName}}</span><span v-if="lottery.selfFlag==='0'"
                  class="tip">官方开奖</span></p>
          <p>{{lottery.periodNo}}</p>
        </div>
        <div>
          即将开奖
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['lottery']
}
</script>

<style lang="scss" scoped>
.detail-content-header {
  padding: 8px 25px;
  background-color: #f3f3f3;
  dl {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 134px;
  }
  dt {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
    }
  }
  dd {
    @extend dt;
    flex: 1;
    padding-left: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    div {
      &:first-child {
        flex: 1;
      }
      &:last-child {
        color: #ec0022;
        font-size: 26px;
      }
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
}
</style>
