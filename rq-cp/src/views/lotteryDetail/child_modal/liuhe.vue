<template>
  <div class="sixhc-betting">
    <div class="balls-wrapper">
      <ul class="all-balls">
        <li v-for="(ball,ballIndex) of ballsList[0].list"
            :key="ballIndex"
            :class="{'selected':ball.selected}"
            @click="chooseBall(ball,ballIndex)">
          <p>{{ball.ball}}</p>
          <p class="odds ellipsis"><span>赔率：</span>{{ball.maxOdds}}</p>
          <p v-if="ball.selfBalls"><span v-for="ball of ball.selfBalls"
                  :key="ball"
                  class="data">{{ball}}</span></p>
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
     * 选择号码
     */
    chooseBall (ball, ballIndex) {
      let arr = [];
      let list = this.ballsList[0].list;
      list.forEach(vvv => {
        if (!list.muti && vvv.ball !== ball.ball) {
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
        this.selectedBalls[0] = this.selectedBalls.filter(
          value => value.ball !== ball.ball
        );
      }
      let balls = this.selectedBalls.reduce((acc, ball) => {
        acc.push(ball.map(item => item.ball).join(','));
        return acc;
      }, []);
      // let { num, newBalls } = this.computeNote[this.lotteryPlayId](balls.join('|'), this.lotteryPlayId);
      let num = this.computeNote[this.lotteryPlayId](balls.join('|'), this.lotteryPlayId);
      let noteInfo = { num, balls };
      let copylist = JSON.parse(JSON.stringify(this.ballsList[0].list));
      // debugger;
      // copylist[ballIndex].selected = !ball.selected;
      this.$set('');
      debugger;
      if (noteInfo) {
        this.$set(this.ballsList[0], "list", copylist);
        this.$set(this.result, "num", noteInfo.num);
        this.$set(this.result, "balls", noteInfo.balls.join("|"));
        // this.$emit("on-change-result", this.result);
        // if (this.ballOdds) {
        //   this.ballOdds();
        // }
      }
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
      this.ballsList = ballsList;
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
      height: 136px;
      padding: 0 10px;
      margin: 15px 7.5px 15px;
      text-align: center;
      font-size: 30px;
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
        color: #ec0022;
      }
      .data {
        margin: 0 5px;
      }
    }
  }
}
</style>
