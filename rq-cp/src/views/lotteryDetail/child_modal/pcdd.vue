<template>
  <div class="pcdd-betting">
    <div class="balls-wrapper">
      <ul class="all-balls">
        <li v-for="(ball,ballIndex) of ballsList[0].balls"
            :key="ballIndex"
            :class="{'selected':ball.selected}"
            @click="chooseBall(ball,ballIndex)">
          <p>{{ball.ball}}</p>
          <p class="odds ellipsis"><span>赔率：</span>{{ball.odds}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bettingPlay', 'code'],
  data () {
    return {
      layout: { layout: {} },
      ballsList: [],//号码数据
      isMultipleRate: false, //单多赔率标识
      result: { num: 0 },// 选中号码计算的结果
      selectedBalls: [], //选择的号码结果
      lotteryPlayId: '',//玩法Id
      computeNote: {} //不同玩法的算法
    }
  },
  watch: {
    bettingPlay: {
      handler (newVal) {
        this.init(newVal);
      },
      deep: true
    }
  },
  methods: {
    /**
     * 投注
     */
    betting () {
      if (!this.selectedBalls.length) {
        this.$toast('请先投注');
      }
      let costAmount = parseInt(this.layout.costAmount);
      let balls = [];
      let data = this.selectedBalls.reduce((acc, item) => {
        acc.push({
          bettingMoney: costAmount,
          bettingNum: 1,
          odds: item.odds,
          rebate: 0,
          lotteryNumber: item.ball
        })
        balls.push(item.ball);
        return acc
      }, [])
      if (!this.isMultipleRate) { //单赔率
        data[0].lotteryNumber = balls.join(',');
        data = [data[0]];
      }
      console.log(data);
      //清除选中的数据
      // this.clearSelect();
    },
    /**
     * 选择号码
     */
    chooseBall (item, idx) {
      if (!item.selected) {
        this.selectedBalls.push(item)
      } else {
        this.selectedBalls = this.selectedBalls.filter(value => value.ball !== item.ball);
      }
      let balls = this.selectedBalls.map(value => value.ball);
      let num = this.computeNote[this.lotteryPlayId](balls.join(','))
      this.$set(this.result, 'len', num);
      this.$set(this.result, 'balls', balls);
      this.$emit('get-balls', this.result);
      this.ballsList[0].balls[idx].selected = !item.selected;
      // this.betting();
    },
    /**
     * 初始化
     */
    init (newVal) {
      this.selectedBalls = [];
      this.computeNote = require(`./common_modal/${this.code}.js`).default;
      let { layout, lotteryPlayId, layout: { rates } } = newVal;
      this.layout = layout;
      this.lotteryPlayId = lotteryPlayId;
      rates.length > 1 ? this.isMultipleRate = true : this.isMultipleRate = false;
      let ballsList = layout.layout;
      ballsList.forEach(item => {
        item.balls = item.balls.reduce((acc, curr, idx) => {
          acc.push({ ball: curr, selected: false, odds: this.isMultipleRate ? rates[idx].maxOdds : rates[0].maxOdds });
          return acc;
        }, [])
      })
      this.ballsList = ballsList;
    },
    /**
     * 清除数据
     */
    clearSelect () {
      this.selectedBalls = [];
      this.$set(this.result, 'num', 0);
      this.ballsList[0].balls.forEach(item => {
        this.$set(item, 'selected', false);
      })
    },
  },
  created () {
    this.init(this.bettingPlay);
  }
}
</script>

<style lang="scss" scoped>
.pcdd-betting {
  .balls-wrapper {
    margin-top: -15px;
  }
  .all-balls {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 225px;
      height: 184px;
      padding: 0 10px;
      margin: 15px 7.5px 15px;
      text-align: center;
      font-size: 34px;
      border: 1px solid #e2e2e2;
      border-radius: 12px;
      box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.1);
      &.selected {
        background-color: #ec0022;
        border-color: #e2e2e2;
        p {
          color: #fff;
        }
      }
      .odds {
        font-size: 28px;
        color: #ec0022;
      }
    }
  }
}
</style>
