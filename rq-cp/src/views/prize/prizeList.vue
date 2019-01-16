<template>
  <div class="prize-content">
    <ul>
      <li v-for="(item,idx) of prizeList"
          :key="idx"
          class="prize-item"
          @click="goPrizeDetail(item.lotteryId)">
        <flex-layout class="prize">
          <img :src="item.lotteryIcon"
               slot="title">
          <div slot="top"
               class="common"><span>{{item.lotteryName}}</span><span class="time">{{item.lastPrizeTime|formatDate}}</span></div>
          <div slot="center"
               class="common"><span>{{item.periodNo}}</span>
            <svg-icon icon-class="right-arrow"></svg-icon>
          </div>
          <div slot="bottom"
               class="common">
            <lottery-number :lotteryNumber="item.lotteryNumber"
                            :code="item.code"
                            :lastPrizeTime="item.lastPrizeTime"></lottery-number>
          </div>
        </flex-layout>
      </li>
    </ul>
  </div>
</template>

<script>
import lotteryNumber from '@/components/lotteryNumber'
export default {
  props: ["prizeList"],
  components: {
    lotteryNumber
  },
  methods: {
    goPrizeDetail (lotteryId) {
      this.$router.push({ name: 'prizeDetail', query: { id: lotteryId } })
    }
  }
}
</script>

<style lang="scss" scoped>
.prize-content {
  background-color: #eee;
  .prize-item {
    height: 196px;
    padding: 0 20px;
    margin-bottom: 20px;
    background-color: #fff;
    &:active {
      background-color: #f3f3f3;
    }
    .prize {
      /deep/ dd {
        flex: 1;
        padding-left: 25px;
      }
      /deep/ img {
        width: 80px;
        height: 80px;
      }
      /deep/ .time {
        color: #868484;
      }
      /deep/ .common {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 30px;
        &:nth-child(2) > span {
          color: #868484;
        }
        &:last-child {
          margin-top: 1px;
        }
      }
    }
  }
}
</style>
