<template>
  <section class="lottery-detail-footer">
    <div>
      <ul>
        <li>
          <svg-icon icon-class="random"></svg-icon>
          <span>机选</span>
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
                      :disabled="!bettingInfo.len">投注</van-button>
        </li>
      </ul>
    </div>
    <div class="tip"
         v-if="bettingInfo.len">
      <div class="money-info"
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
    bet () { //点击投注
      // if(this.bettingInfo.len)
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
      font-size: 30px;
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
}
</style>
