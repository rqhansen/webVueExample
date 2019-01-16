<template>
  <div class="prize-detail-list">
    <ul>
      <li v-for="(item,idx) of prizeHistoryList"
          :key="idx">
        <dl>
          <dt>
            <div class="lottery-no">{{item.periodNo}}</div>
            <div v-if="item.prizeTime">
              {{item.prizeTime|formatDate}}
            </div>
            <div v-else>
              即将开奖
            </div>
          </dt>
          <dd :class="[code==='6hc'? 'sixhc':'']">
            <lottery-number :lotteryNumber="item.lotteryNumber"
                            :code="code"
                            :lastPrizeTime="item.prizeTime"></lottery-number>
          </dd>
        </dl>

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
    padding: 10px 25px;
    border-top: 1px solid #f3f3f3;
  }
  dl {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 154px;
    font-size: 30px;
  }
  dt {
    @extend dl;
    height: inherit;
    flex-direction: row;
    justify-content: space-between;
  }
  /deep/ .lottery-number-wrappper {
    position: relative;
    top: -6px;
  }
}
</style>
