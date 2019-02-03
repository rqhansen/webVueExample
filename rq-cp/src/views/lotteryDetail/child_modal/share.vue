<template>
  <div class="other-betting balls">
    <!-- 位置多选框 -->
    <div v-if="barBtns.length"
         class="btns-position">
      <dl class="checkbox-list">
        <dt>位置</dt>
        <dd>
          <van-checkbox-group v-model="btnsPosition"
                              @change="positionSelect">
            <van-checkbox v-for="(item,idx) of barBtns"
                          :key="idx"
                          :name="item.operator">
              {{item.operator}}
            </van-checkbox>
          </van-checkbox-group>
        </dd>
      </dl>
    </div>
    <!-- 非手动选号 -->
    <ul v-if="layout.format!=='3'">
      <li v-for="(item,itemIdx) of ballsList"
          :key="itemIdx"
          :class="{'lay':toolBtns.length}">
        <!-- label如果存在 -->
        <div class="label"
             :class="{'top':!toolBtns.length}"
             v-if="item.name">
          <span>{{item.name}}</span>
        </div>
        <div class="balls-wrapper"
             :class="{'no-label':!item.name}">
          <!-- 例如pk10的全、大、小、单、双、清 -->
          <div v-if="toolBtns.length"
               class="ball-btns">
            <span v-for="(itm,innerIdx) of toolBtns"
                  :key="innerIdx"
                  :style="{width:100/toolBtns.length +'%'}"
                  @click="chooseBall(itm,itemIdx)">{{itm.operator}}</span>
          </div>
          <!-- 号码球 -->
          <div class="all-balls"
               v-if="!isMultipleRate">
            <span v-for="(ball,ballIndex) of item.balls"
                  :key="ballIndex"
                  :class="{'selected':ball.selected}"
                  @click="chooseBall(ball,ballIndex,item,itemIdx)">{{ball.ball}}</span>
          </div>
          <div class="all-balls multi-rate"
               v-else>
            <div v-for="(ball,ballIndex) of item.balls"
                 :key="ballIndex"
                 :class="{'selected':ball.selected,'wide-width':!item.name}"
                 @click="chooseBall(ball,ballIndex,item,itemIdx)">
              <span> {{ball.ball}}</span>
              <span class="odds ellipsis"
                    v-if="user.userName">赔率:{{ball.odds}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- 手动选号 -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['bettingPlay', 'code', 'maxOdd'],
  data () {
    return {
      layout: { layout: {} },
      barBtns: [], //checkout按钮
      ballsList: [],//号码数据
      toolBtns: [],//toolbar数据
      isMultipleRate: false, //单多赔率标识
      // btns:[], //多选框选择的结果
      selectedBalls: [], //选择的号码结果
      btnsPosition: [], //计算位置，目前只有时时彩任选,单选时有
      lotteryPlayId: '',//玩法Id
      computeNote: {}, //不同玩法的算法
      randomNote: {} //随机玩法算法
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
    randomBet () {
      this.clearSelected();
      let ball;
      let list = [];
      // 调用随机注数的共用方法
      let result = this.randomNote[this.lotteryPlayId](this.layout.optballs);
      // 特殊情况处理 因随机的一个号码有可能够成多注会返回一个对象
      if (typeof result === "object") {
        ball = result.ball;
      } else {
        ball = result;
      }
      ball.split("|").forEach(item => {
        list.push(item.split(","));
      });
      // 判断需要勾选位置的玩法  只有时时彩任选时要处理
      if (this.layout.positionbar) {
        this.btnsPosition = list[0];
        list = [list[1]];
      }
      this.ballsList.forEach((item, idx) => {
        item.balls.forEach(value => {
          if (list[idx].some(vvv => vvv === value.ball)) {
            value.selected = true;
          }
        });
      });
      this.computeLottery(ball);
    },
    // 计算注数
    computeLottery (balls) {
      let result = this.computeNote[this.lotteryPlayId](balls);
      let odds;
      let len = result.length;
      if (result.len || result.len === 0) len = result.len;
      if (this.isMultipleRate) odds = result; // 处理多赔率
      this.$emit('get-balls', { len: len, balls: balls, odds: odds, maxOdd: this.maxOdd });
    },
    // 清除选中
    clearSelected () {
      this.ballsList.forEach(item => {
        item.balls.forEach(value => {
          value.selected = false;
        });
      });
      this.btnsPosition = [];
      this.$emit('get-balls', { len: 0, balls: '', odds: '', maxOdd: this.maxOdd });
    },
    hanlderOdds () {
      let rates = this.layout.rates;
      rates.length > 1 ? this.isMultipleRate = true : this.isMultipleRate = false;
      this.ballsList.forEach(item => {
        item.balls = item.balls.reduce((acc, curr, idx) => {
          acc.push({ ball: curr, selected: false, odds: this.isMultipleRate ? rates[idx].maxOdds : null });
          return acc;
        }, [])
      })
    },
    //选择号码
    chooseBall (vv, vvIdx, item, itemIdx) {
      let vm = this;
      this.selectedBalls = [];
      if (vv && !vv.methodName) {
        vv.selected = !vv.selected;
      }
      this.layout.layout.forEach((data, dataIdx) => {
        let arr = [];
        data.balls.forEach((value, valueIdx) => {
          if (vv) {
            if (vv.methodName) {
              if (vvIdx === dataIdx) vm.quickSelect(vv.methodName, value, valueIdx, data);
            } else {
              /*! 去掉当前选项其他选中的球.
              * !data.muti字段 当前选项不能重复
              * value.ball !== vv.ball 字段 只处理不是当前选中的球
              * itemIdx === dataIdx 字段 只处理当前的选项
              */
              if (!data.muti && value.ball !== vv.ball && itemIdx === dataIdx) {
                value.selected = false;
              }
              /*! 去掉其他选项的球。
              * !item.repeatable字段 所有选项中不可出现于其他选项重复的球
              * alueIdx === vvIdx 字段 当前选中的位置
              * itemIdx !== dataIdx 字段 只处理别的选项
              */
              if (('repeatable' in item) && valueIdx === vvIdx && itemIdx !== dataIdx) {
                value.selected = false;
              }
              /*! 判断是否全选
              *  选中一个全选中，取消一个全取消 
              */
              if (data.chooseAll) {
                if (vv.selected) {
                  value.selected = true;
                } else {
                  value.selected = false;
                }
              }
            }
          }
          // 获取选中的球
          if (value.selected) {
            arr.push(value.ball);
          }
        });
        if (this.layout.positionbar) vm.selectedBalls.unshift(this.btnsPosition.join(','));
        // debugger;
        vm.selectedBalls.push(arr.join(','));
      })
      let balls = vm.selectedBalls.join('|');
      let result = this.computeNote[this.lotteryPlayId](balls);
      let odds;
      let len = result.length;
      if (result.len || result.len === 0) len = result.len;
      if (this.isMultipleRate) odds = result; //处理多赔率 5.5
      let costAmount = this.layout.costAmount;
      this.$emit('get-balls', { len: len, balls: balls, odds: odds, maxOdd: this.maxOdd });
    },
    // 快捷操作
    quickSelect (type, item, idx, data) {
      let arr = [];
      let num = parseInt(item.ball);
      let center = 5;
      switch (type) {
        case 'all':
          item.selected = true;
          break;
        case 'big':
          if ((idx >= center && /^[0-9]/.test(item.ball)) || item.ball === '大') {
            item.selected = true;
          } else {
            item.selected = false;
          }
          break;
        case 'small':
          if ((idx < center && /^[0-9]/.test(item.ball)) || item.ball === '小') {
            item.selected = true;
          } else {
            item.selected = false;
          }
          break;
        case 'odd':
          if (num % 2 === 1 || item.ball === '单') {
            item.selected = true;
          } else {
            item.selected = false;
          }
          break;
        case 'even':
          if (num % 2 === 0 || item.ball === '双') {
            item.selected = true;
          } else {
            item.selected = false;
          }
          break;
        case 'clear':
          item.selected = false;
          break;
      }
    },
    positionSelect () { //选择位置发生变化
      if (this.layout.format !== '3') {
        this.chooseBall();
      } else {
        this.inputSelect()
      }
    },
    init (newVal) {
      this.selectedBalls = [];
      this.computeNote = require(`./common_modal/bet/${this.code}.js`).default;
      this.randomNote = require(`./common_modal/random/${this.code}.js`).default;
      let { layout, lotteryPlayId, layout: { positionbar, toolbar } } = newVal;
      this.layout = layout;
      this.lotteryPlayId = lotteryPlayId;
      this.ballsList = layout.layout;
      positionbar ? this.barBtns = positionbar.btns : this.barBtns = [];
      toolbar ? this.toolBtns = toolbar.btns : this.toolBtns = [];
      this.hanlderOdds();
    }
  },
  created () {
    this.init(this.bettingPlay);
  }
}
</script>

<style lang="scss" scoped>
.checkbox-list {
  display: flex;
  padding: 10px 15px;
  margin-bottom: 15px;
  background-color: #f1f1f1;
  /deep/ .van-checkbox-group {
    display: flex;
    margin-left: 50px;
    /deep/ .van-checkbox {
      margin-right: 10px;
    }
    /deep/ .van-icon-success {
      width: 28px;
      height: 28px;
      top: -6px;
      font-size: 22px;
      &:before {
        vertical-align: -3px;
      }
    }
  }
}
//号码样式
.balls {
  li {
    display: flex;
    align-items: flex-start;
    padding-bottom: 15px;
    &.lay {
      align-items: center;
    }
  }
  .label {
    @extend li;
    width: 110px;
    max-width: 140px;
    padding-bottom: 0;
    &.top {
      margin-top: 5px;
    }
    span {
      position: relative;
      display: block;
      height: 48px;
      line-height: 48px;
      padding: 0 10px;
      text-align: center;
      color: #999;
      font-size: 26px;
      background-color: #eee;
      &:after {
        position: absolute;
        top: 0;
        right: -47px;
        display: block;
        content: "";
        border: 24px solid #fff;
        border-left-color: #eee;
      }
    }
  }
  .balls-wrapper {
    flex: 1;
    font-size: 30px;
    margin-left: 34px;
    &.no-label {
      margin-left: 0;
    }
    .ball-btns {
      width: 100%;
      height: 48px;
      margin-bottom: 15px;
      line-height: 48px;
      font-size: 0;
      background-color: #f1f1f1;
      border-radius: 48px;
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
      span {
        display: inline-block;
        font-size: 30px;
        text-align: center;
        &:hover {
          color: #fff;
          background: #ec0022;
        }
        &:first-child {
          border-bottom-left-radius: 48px;
          border-top-left-radius: 48px;
        }
        &:last-child {
          border-bottom-right-radius: 48px;
          border-top-right-radius: 48px;
        }
      }
    }
    .all-balls {
      @extend li;
      flex-wrap: wrap;
      min-height: 48px;
      padding: 0;
      > span {
        display: block;
        width: 72px;
        height: 72px;
        margin: 5px;
        line-height: 72px;
        text-align: center;
        border-radius: 50%;
        border: 1px solid #e2e2e2;
        &.selected {
          background: #ec0022;
          border-color: #e06136;
          color: #fff;
        }
      }
      &.multi-rate {
        > div {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          width: 167px;
          height: 124px;
          padding: 0 10px;
          margin: 0 7.5px 15px;
          text-align: center;
          font-size: 34px;
          border: 1px solid #e2e2e2;
          border-radius: 12px;
          box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
          &.wide-width {
            width: 225px;
          }
          &.selected {
            background-color: #ec0022;
            border-color: #e2e2e2;
            span {
              color: #fff;
            }
          }
          .odds {
            font-size: 26px;
            color: #ec0022;
          }
        }
      }
    }
  }
}
</style>
