<template>
  <div class="pcdd-betting">
    <div class="balls-wrapper">
      <ul class="all-balls">
        <li v-for="(ball,ballIndex) of ballsList[0].balls"
            :key="ballIndex"
            :class="{'selected':ball.selected}"
            @click="chooseBall(ball,ballIndex)">
          <p>{{ball.ball}}</p>
          <p class="odds ellipsis"
             v-if="user.userName"><span>赔率：</span>{{ball.odds}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
      computeNote: {}, //不同玩法的算法
      randomNote: {} //随机算法
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
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    // 机选一注
    randomBet () {
      this.clearSelected();
      let list = [];
      let result = this.randomNote[this.lotteryPlayId](this.layout.optballs);
      let len = this.ballsList[0].balls.length;
      list = result.split(',');
      for (var i = 0; i < len; i++) {
        if (list.some(vvv => vvv === this.ballsList[0].balls[i].ball)) {
          this.selectedBalls.push(this.ballsList[0].balls[i])
          this.$set(this.ballsList[0].balls[i], 'selected', true);
        }
      }
      // debugger;
      let num = this.computeNote[this.lotteryPlayId](result);
      this.$set(this.result, 'len', num);
      this.$set(this.result, 'balls', result);
      this.$emit('get-balls', this.result);
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
    },
    /**
     * 初始化
     */
    init (newVal) {
      this.selectedBalls = [];
      this.computeNote = require(`./common_modal/bet/${this.code}.js`).default;
      this.randomNote = require(`./common_modal/random/${this.code}.js`).default;
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
    clearSelected () {
      this.selectedBalls = [];
      this.ballsList[0].balls.forEach(item => {
        this.$set(item, 'selected', false);
      })
      this.$set(this.result, 'len', 0);
      this.$set(this.result, 'balls', '');
      this.$emit('get-balls', this.result);
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
