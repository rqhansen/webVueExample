<template>
  <div class="prize-content">
    <ul>
      <li v-for="(item,idx) of prizeList"
          :key="idx"
          class="prize-item"
          @click="goPrizeDetail(item.lotteryId)">
        <dl>
          <dt><img :src="item.lotteryIcon"></dt>
          <dd>
            <div class="common"><span>{{item.lotteryName}}</span><span class="time">{{item.lastPrizeTime|formatDate}}</span></div>
            <div class="common"><span>{{item.periodNo}}</span>
              <svg-icon icon-class="right-arrow"></svg-icon>
            </div>
            <div class="balls-items">
              <lottery-number :lotteryNumber="item.lotteryNumber"
                              :code="item.code"
                              :lastPrizeTime="item.lastPrizeTime"></lottery-number>
            </div>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import lotteryNumber from '@/components/lotteryNumber'
// import util from '@/assets/js/util'
export default {
  props: ["prizeList"],
  components: {
    lotteryNumber
  },
  // filters: {
  //   formatDate (val) {
  //     if (!val) return
  //     return util.formatDate(`${val}`, 'yymmddhhmmss');
  //   }
  // },
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
    padding: 0 20px;
    margin-bottom: 20px;
    background-color: #fff;
    &:active {
      background-color: #f3f3f3;
    }
    dl {
      display: flex;
      dt {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        height: 196px;
      }
      img {
        width: 80px;
        height: 80px;
      }
      dd {
        @extend dt;
        flex: 1;
        padding-left: 25px;
        font-size: 30px;
      }
      .common {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .time {
          color: #868484;
        }
        &:nth-child(2) {
          color: #868484;
        }
      }
      .balls-items {
        padding: 4px 0;
      }
    }
  }
}
</style>
