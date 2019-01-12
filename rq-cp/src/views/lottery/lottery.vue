<template>
  <div class="lottery-list-scroll refresh-animation-wrap"
       v-refresh="refresh">
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
  props: ["lotteryList"],
  methods: {
    refresh () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          alert("刷新成功");
          resolve();
        }, 1500)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.lottery-list-scroll {
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    li {
      width: 50%;
      height: 196px;
      padding: 30px 40px;
      font-size: 28px;
      &:not(:nth-child(2n)) {
        border-right: 1px solid #eee;
      }
      border-bottom: 1px solid #eee;
      &:last-child {
        border-bottom: none;
      }
      &:nth-last-child(2) {
        border-bottom: none;
      }
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
