<template>
  <div class="lottery-number-wrappper">
    <template v-if="balls">
      <span v-for="(ball,idx) of balls"
            :key="idx"
            :class="[className,code==='pk10'?`pk10-${ball}`:code==='pcdd'?'pcdd':'',(!ball.num&&code==='6hc' ||code==='pcdd'&&idx%2!==0)?'split':'',code==='pcdd'&&idx===balls.length-1? `${ball.clr}`:'']">
        <template v-if="code==='6hc'">
          <i class="ball"
             :class="[ball.color]">{{ball.num?ball.num:ball}}</i>
          <i class="txt"
             v-if="ball.num">{{ball.zTxt}}</i>
        </template>
        <template v-else>
          {{code==='pcdd'?ball.content:ball}}
        </template>
      </span>
    </template>
    <template v-else>
      <p class="lottery-tip">正在开奖...</p>
    </template>

  </div>
</template>

<script>
import getZodiac from '@/assets/js/formateBalls/zodica'
import formatPcdd from '@/assets/js/formateBalls/formatPcdd'
export default {
  props: ['code', 'lastPrizeTime', 'lotteryNumber'],
  computed: {
    className () {
      return this.code === '11x5' ? 'eleven-five' : this.code === '6hc' ? 'sixhc' : this.code !== 'pcdd' && this.code
    },
    balls () {
      if (!this.lotteryNumber) {
        return
      }
      let balls = this.lotteryNumber.replace('+', ',').split(',');
      switch (this.code) {
        case '6hc':
          balls.forEach((ball, index) => {
            getZodiac(`${this.lastPrizeTime}`).forEach(value => {
              value.data.forEach((vv, idx) => {
                if (vv == ball) {
                  balls[index] = {
                    num: ball,
                    zTxt: value.label,
                    color: value.clrs[idx]
                  }
                }
              })
            });
          });
          balls.splice(balls.length - 1, 0, '+');
          return balls;
        case 'pcdd':
          return formatPcdd(balls);
        default:
          return balls;
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lottery-number-wrappper {
  font-size: 0;
  .lottery-tip {
    font-size: 30px;
    color: #ec0022;
  }
  span {
    display: inline-block;
    width: 48px;
    height: 48px;
    line-height: 48px;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    &:not(:first-child) {
      margin-left: 10px;
    }
    &.split {
      vertical-align: top;
      margin-left: 0;
      i {
        color: #000;
      }
      & + span {
        margin-left: 0;
      }
    }
  }
  .ksan {
    background-color: #ec0022;
    border-radius: 50%;
  }
  .ssc {
    @extend .ksan;
  }
  .eleven-five {
    @extend .ksan;
  }
  .qtcp {
    @extend .ksan;
  }
  .klsf {
    @extend .ksan;
  }
  .fc3d {
    @extend .ksan;
  }
  .pk10 {
    border-radius: 6px;
    color: #fff;
    &.pk10-01 {
      background-color: #ffde01;
    }
    &.pk10-02 {
      background-color: #0089ff;
    }
    &.pk10-03 {
      background-color: #4d4d4d;
    }
    &.pk10-04 {
      background-color: #ff7300;
    }
    &.pk10-05 {
      background-color: #01d7d7;
    }
    &.pk10-06 {
      background-color: #5201ff;
    }
    &.pk10-07 {
      background-color: #a5a5a5;
    }
    &.pk10-08 {
      background-color: #ff0000;
    }
    &.pk10-09 {
      background-color: #760000;
    }
    &.pk10-10 {
      background-color: #28c201;
    }
  }
  .pcdd {
    @extend .ksan;
    &.split {
      color: #000;
      background-color: transparent;
    }
    &.red {
      background-color: #ec0022;
    }
    &.blue {
      background-color: blue;
    }
    &.green {
      background-color: green;
    }
    &.other {
      background-color: gray;
    }
  }
  .sixhc {
    &.split {
      i {
        @extend .pcdd.split;
      }
    }
    i {
      font-style: normal;
      color: #000;
      font-weight: normal;
      font-size: 26px;
      &.ball {
        @extend span;
        @extend .pcdd;
        border-radius: 50%;
      }
    }
  }
}
</style>
