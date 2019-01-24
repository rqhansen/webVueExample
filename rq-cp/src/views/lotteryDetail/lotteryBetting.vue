<template>
  <div class="lottery-betting-wrapper">
    <header class="tip">{{bettingPlay.playDesc}}</header>
    <!-- 号码区 -->
    <div class="betting-balls">
      <ul>
        <li v-for="(item,idx) of layout.layout"
            :key="idx">
          <div class="label"
               v-if="item.name">
            <span>{{item.name}}</span>
          </div>
          <div class="balls-wrapper">
            <span v-for="(ball,index) of item.balls"
                  :key="index">{{ball}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['lotteryPlay'],
  data () {
    return {
      bettingPlay: {}, //玩法
      layout: ''
    }
  },
  watch: {
    lotteryPlay: {
      handler (newVal) {
        this.handlerData(newVal);
      },
      deep: true
    }
  },
  methods: {
    handlerData (data) {
      let layout = JSON.parse(data.layout);
      //处理layout
      layout.layout.forEach(item => {
        item.balls = item.balls.split('|');
      })
      //结束处理layout
      this.layout = layout;
      this.bettingPlay = JSON.parse(JSON.stringify(data));
    }
  },
}
</script>

<style lang="scss" scoped>
.lottery-betting-wrapper {
  font-size: 26px;
  padding: 15px 15px 0;
  .tip {
    min-height: 48px;
    max-height: 96px;
    line-height: 48px;
  }
  .betting-balls {
    li {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
    }
    .label {
      @extend li;
      flex: 1;
      span {
        position: relative;
        display: block;
        height: 48px;
        line-height: 48px;
        padding: 0 10px;
        text-align: center;
        color: #999;
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
      @extend li;
      flex: 5;
      flex-wrap: wrap;
      min-height: 48px;
      padding-left: 25px;
      font-size: 30px;
      span {
        display: block;
        width: 72px;
        height: 72px;
        margin: 5px;
        line-height: 72px;
        text-align: center;
        border-radius: 50%;
        border: 1px solid red;
      }
    }
  }
}
</style>
