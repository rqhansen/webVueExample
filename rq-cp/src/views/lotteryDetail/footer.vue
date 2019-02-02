<template>
  <section class="lottery-detail-footer">
    <!-- bottom -->
    <div>
      <ul>
        <li @click="randomBet"
            v-if="!bettingInfo.len">
          <svg-icon icon-class="random"></svg-icon>
          <span>机选</span>
        </li>
        <li v-else
            @click="cancelSelect">
          <span>清除</span>
        </li>
        <li v-if="code!=='pcdd'">
          共<span class="count">{{bettingInfo.len}}</span>注<span class="money">{{totalMoney}}</span>元
        </li>
        <li v-else>
          单注<input type="text"
                 style="color:#333;"
                 v-model.trim="money"
                 @blur="blurIpt($event)"
                 @input="changeSingleMoney($event)" />元
        </li>
        <li>
          <van-button type="primary"
                      @click="bet"
                      :disabled="!!!bettingInfo.len">投注</van-button>
        </li>
      </ul>
    </div>
    <!-- 投注金额提醒 -->
    <div class="tip"
         v-if="bettingInfo.len">
      <div class="money-info info"
           v-if="code!=='pcdd'">
        每注金额
        <input type="text"
               v-model.trim="money"
               @blur="blurIpt($event)"
               @input="changeSingleMoney($event)" />
        元
        若中奖,单注最高中<span class="prize-money ellipsis">{{prizeMoney}}</span>元
      </div>
      <div v-else
           style="word-spacing:2px;">
        <span>{{bettingInfo.len}}</span>注<span class="prize-money">{{totalMoney}}</span>元
      </div>
    </div>
    <!-- 投注号码提醒 -->
    <div class="tip balls-tip"
         v-if="bettingInfo.len && code!=='pcdd'">
      <div><span>当前选号</span></div>
      <div>
        <div class="icon"
             @click="horScroll(0)">
          <svg-icon icon-class="double-left-tri"></svg-icon>
        </div>
        <div class="balls"
             ref="balls-wrapper">{{bettingInfo.balls}}</div>
        <div class="icon"
             @click="horScroll(1)">
          <svg-icon icon-class="double-right-tri"></svg-icon>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['bettingInfo', 'code'],
  data () {
    return {
      money: 2
    }
  },
  computed: {
    prizeMoney () { //单注中奖金额
      if (this.code === 'pcdd') return;
      return Number(this.bettingInfo.maxOdd * this.money).toFixed(2);
    },
    totalMoney () { //总金额
      return Number(this.bettingInfo.len * this.money).toFixed(2);
    }
  },
  methods: {
    horScroll (idx) { //左右偏移
      let { scrollLeft, scrollWidth, clientWidth } = this.$refs['balls-wrapper'];
      if (scrollWidth - clientWidth <= 0) return; //未超出容器
      if (scrollLeft === 0 && !idx) { //最左端
        return
      }
      if (scrollLeft >= scrollWidth - clientWidth && idx) { //最右端
        return
      }
      let offLeft = idx ? 20 : -20;
      this.$refs['balls-wrapper'].scrollLeft = scrollLeft + offLeft;
    },
    bet () { //点击投注
      this.$toast('投注成功');
      this.cancelSelect();
    },
    cancelSelect () { //清除选号
      this.$emit('clear-select');
      this.clearSelect();
    },
    randomBet () { //随机选号
      this.$emit('random-bet');
    },
    clearSelect () { //父级调用
      this.money = 2;
    },
    blurIpt (e) { //输入框失焦
      let val = e.target.value;
      if (!val) {
        this.money = e.target.value = 2;
      }
    },
    changeSingleMoney (e) { //输入中
      let sinMoney = e.target.value;
      if (sinMoney > 300000) {
        this.money = e.target.value = 300000;
      } else if (isNaN(sinMoney)) {
        this.money = e.target.value = 2;
      }
    }
  },
  deactivated () {
    this.cancelSelect();
  }
}
</script>

<style lang="scss" scoped>
.lottery-detail-footer {
  position: relative;
  ul {
    display: flex;
    height: 100%;
    > li {
      flex: 2;
      line-height: 96px;
      text-align: center;
      font-size: 32px;
      color: #fff;
      background-color: #404247;
      &:nth-child(2) {
        flex: 5;
        background-color: #2a2d32;
      }
      &:nth-child(3) {
        /deep/ .van-button {
          width: 100%;
          height: 100%;
          font-size: 32px !important;
          border-color: #ec0022;
          background-color: #ec0022;
        }
      }
    }
    .svg-icon {
      margin-right: 10px;
      font-size: 40px;
      vertical-align: middle;
    }
    .count {
      margin: 0 5px;
    }
    .money {
      @extend .count;
      color: #ec0022;
    }
  }
  .tip {
    position: absolute;
    left: 0;
    width: 100%;
    top: -80px;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    text-align: center;
    background-color: #fee;
  }
  .money-info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 5px;
  }
  input {
    width: 128px;
    height: 50px;
    padding: 0 10px;
    margin: 0 5px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #c3c3c3;
  }
  .prize-money {
    color: #ec0022;
    max-width: 150px;
  }
  .balls-tip {
    display: flex;
    top: -160px;
    padding: 0 10px;
    line-height: 80px;
    border-top: 1px solid #c3c3c3;
    border-bottom: 1px solid #c3c3c3;
    > div {
      width: 146px;
      &:last-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 584px;
        padding: 0 10px;
        color: #ec0022;
      }
      .icon {
        width: 30px;
      }
      .balls {
        width: 504px;
        margin: 0 10px;
        text-align: left;
        overflow: hidden;
      }
    }
  }
}
</style>
