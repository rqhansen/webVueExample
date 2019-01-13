<template>
  <div class="lottery-list-content">
    <ul>
      <li v-for="(lottery,idx) of lotteryList"
          :key="idx"
          class="touch-feedback"
          v-feedBackClick>
        <dl>
          <dt>
            <img :src="lottery.lotteryIcon">
          </dt>
          <dd>
            <div class="ellipsis">{{lottery.lotteryName}}</div>
            <div class="ellipsis">{{lottery.prizeIntervalDesc}}</div>
            <div class="ellipsis">
              <count-down :nextPrizeTime="lottery.nextPrizeTime"
                          :currTime="lottery.sysDate"></count-down>
            </div>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import countDown from './countDown'
export default {
  components: {
    countDown
  },
  props: ["lotteryList"]
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
    dl {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
    }
    dt {
      margin-right: 20px;
    }
    dd {
      width: 200px;
      .ellipsis {
        &:nth-child(2) {
          color: #999;
        }
      }
    }
    img {
      width: 104px;
      height: 104px;
    }
  }
}
</style>
