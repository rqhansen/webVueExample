<template>
  <div class="prize-detail-list">
    <ul>
      <li v-for="(item,idx) of prizeHistoryList"
          :key="idx">
        <flex-layout class="detail-content"
                     :class="[code==='6hc'?'sixhc':'']">
          <div slot="title">
            {{item.periodNo}}
          </div>
          <div v-if="item.prizeTime"
               slot="content"
               class="time">
            {{item.prizeTime|formatDate}}
          </div>
          <div v-else
               slot="content"
               class="time">
            即将开奖
          </div>
          <div slot="top">
            <lottery-number :lotteryNumber="item.lotteryNumber"
                            :code="code"
                            :lastPrizeTime="item.prizeTime"></lottery-number>
          </div>
        </flex-layout>
      </li>
    </ul>
  </div>
</template>

<script>
import lotteryNumber from '@/components/lotteryNumber'
export default {
  props: ['prizeHistoryList', 'code'],
  components: {
    lotteryNumber
  }
}
</script>

<style lang="scss" scoped>
.prize-detail-list {
  li {
    height: 174px;
    padding: 10px 25px;
    border-top: 1px solid #f3f3f3;
    .detail-content {
      /deep/ .time {
        color: #868484;
        font-size: 24px;
      }
      &.sixhc {
        /deep/ dt {
          align-items: flex-start;
        }
        /deep/ dd {
          .lottery-number-wrappper {
            position: relative;
            top: -10px;
          }
        }
      }
      /deep/ dl {
        flex-direction: column;
      }
      font-size: 30px;
      /deep/ dt {
        flex-direction: row;
        justify-content: space-between;
      }
      /deep/ dd {
        // flex-direction: row;
        // justify-content: space-between;
        @extend dt;
      }
    }
  }
}
</style>
