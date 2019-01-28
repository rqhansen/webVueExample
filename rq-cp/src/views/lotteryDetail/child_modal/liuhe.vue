<template>
  <div class="sixhc-betting">
    <div class="balls-wrapper"
         :class="{'special-wrapper':!isShowType}">
      <ul class="all-balls"
          v-if="isShowType">
        <li class="common-balls"
            v-for="(ball,ballIndex) of balls"
            :key="ballIndex"
            :class="{'selected':ball.selected}"
            @click="chooseBall(ball,ballIndex)">

          <p class="ball">{{ball.ball}}</p>
          <p class="odds ellipsis"><span>赔率：</span>{{ball.maxOdds}}</p>
          <p v-if="ball.selfBalls"><span v-for="ball of ball.selfBalls"
                  :key="ball"
                  class="data">{{ball}}</span></p>
        </li>
      </ul>
      <ul class="all-balls"
          v-else>
        <li class="special-balls"
            v-for="(ball,ballIndex) of balls"
            :key="ballIndex">
          <p class="ball"
             :class="{'selected':ball.selected}"
             @click="chooseBall(ball,ballIndex)">{{ball.ball}}</p>
          <p class="odds ellipsis">{{ball.maxOdds}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import formatData from "./format_data.js";
export default {
  props: ['bettingPlay', 'code', 'parentPlayId'],
  data () {
    return {
      result: { num: 0 },// 选中号码计算的结果
      selectedBalls: [], //选择的号码结果
      lotteryPlayId: '',//玩法Id
      computeNote: {}, //不同玩法的算法
      ballsInfo: {},//号码球相关信息
      balls: [], //号码球
      isShowType: false //区分css样式
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
     * 选择号码
     */
    chooseBall (ball, ballIndex) {
      let arr = [];
      this.selectedBalls = [];
      this.balls.forEach(vvv => {
        if (!this.ballsInfo.muti && vvv.ball !== ball.ball) {
          vvv.selected = false;
        }
        if (vvv.selected) {
          arr.push(vvv);
        }
      });
      this.selectedBalls.push(arr);
      if (!ball.selected) {
        this.selectedBalls[0].push(ball);
      } else {
        this.selectedBalls[0] = this.selectedBalls[0].filter(
          value => value.ball !== ball.ball
        );
      }
      let balls = this.selectedBalls.reduce((acc, ball) => {
        acc.push(ball.map(item => item.ball).join(','));
        return acc;
      }, []);
      let num = this.computeNote[this.lotteryPlayId](balls.join('|'), this.lotteryPlayId);
      if (num < 0) {
        this.$toast('最多选择' + Math.abs(num) + '个');
        this.selectedBalls[0].splice(Math.abs(num), 1)
        return
      }
      this.$set(this.balls[ballIndex], 'selected', !ball.selected);
      this.$set(this.result, "num", num);
      this.$set(this.result, "balls", balls.join("|"));
      // this.$emit("on-change-result", this.result);
    },
    /**
     * 初始化
     */
    init (newVal) {
      this.selectedBalls = [];
      this.computeNote = require(`./common_modal/${this.code}.js`).default;
      let { layout, lotteryPlayId, layout: { rates } } = newVal;
      this.lotteryPlayId = lotteryPlayId;
      layout.layout.forEach(item => {
        let arr = [];
        item.balls.forEach(ball => {
          let [selfBalls, obj] = ['', ''];
          let id = this.parentPlayId;
          if (id === '709') {
            selfBalls = formatData.mant(ball);
          } else if (id === '708' || id === '7011' || id === "7012") {
            selfBalls = formatData.zodica(ball, id);
          }
          if (rates.length === 1) {
            obj = Object.assign({}, rates[0]);
          } else {
            obj = Object.assign({}, rates.filter(rate => ball === rate.ball)[0]);
          }
          if (selfBalls) {
            obj.selfBalls = selfBalls.data;
          }
          obj.ball = ball;
          arr.push(obj);
        });
        item.list = arr;
      })
      if (["702", "705", "706", "7013", "7014", "7011"].includes(this.parentPlayId) || layout.layout[0].list[0].selfBalls) {
        this.isShowType = true;
      } else {
        this.isShowType = false;
      }
      // debugger;
      let { list, ...ballsInfo } = layout.layout[0];
      this.balls = list;
      this.ballsInfo = ballsInfo;
    },
  },
  created () {
    this.init(this.bettingPlay);
  }
}
</script>

<style lang="scss" scoped>
.sixhc-betting {
  .balls-wrapper {
    margin-top: -15px;
    &.special-wrapper {
      margin-top: 0;
    }
  }
  .all-balls {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    > li {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      font-size: 34px;
    }
    .common-balls {
      width: 225px;
      height: 184px;
      padding: 0 10px;
      margin: 15px 7.5px 15px;
      text-align: center;
      border: 1px solid #e2e2e2;
      border-radius: 12px;
      box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.1);
      &.selected {
        p {
          color: #fff;
        }
      }
      .data {
        margin: 0 5px;
      }
    }
    .special-balls {
      width: 105px;
      margin: 0 7.5px 0;
      text-align: center;
      .ball {
        width: 82px;
        height: 82px;
        line-height: 82px;
        border-radius: 50%;
        border: 1px solid #e2e2e2;
      }
    }
    .odds {
      color: #ec0022;
      margin: 5px 0;
      font-size: 28px;
    }
    .selected {
      background-color: #ec0022;
      border-color: #e2e2e2;
      color: #fff;
    }
  }
}
</style>
