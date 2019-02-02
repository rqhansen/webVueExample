<template>
  <div class="lottery-list-content">
    <ul>
      <li v-for="(lottery,idx) of lotteryList"
          :key="idx"
          class="touch-feedback"
          v-feedBackClick="{funs:goPath,lotteryId:lottery.lotteryId}">
        <flex-layout class="lottery-item">
          <div slot="title">
            <img :src="lottery.lotteryIcon">
          </div>
          <div class="ellipsis"
               slot="top">{{lottery.lotteryName}}</div>
          <div class="ellipsis"
               slot="center">{{lottery.prizeIntervalDesc}}</div>
          <div class="ellipsis"
               slot="bottom">
            <count-down :nextPrizeTime="lottery.nextPrizeTime"
                        :currTime="lottery.sysDate"></count-down>
          </div>
        </flex-layout>
      </li>
    </ul>
  </div>
</template>

<script>
import countDown from './countDown'
export default {
  props: ["lotteryList"],
  components: {
    countDown
  },
  methods: {
    goPath (lotteryId) {
      this.$router.push({ name: 'lotteryDetail', query: { id: lotteryId } });
    }
  }
}
</script>

<style lang="scss" scoped>
.lottery-list-content {
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    li {
      width: 50%;
      height: 196px;
      padding: 30px 40px;
      font-size: 28px;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
    }
    .lottery-item {
      /deep/ dd {
        margin-left: 20px;
      }
      img {
        width: 104px;
        height: 104px;
      }
      .ellipsis {
        &:nth-child(2) {
          color: #999;
        }
      }
    }
  }
}
</style>
