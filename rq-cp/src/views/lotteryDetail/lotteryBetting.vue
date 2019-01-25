<template>
  <div class="lottery-betting-wrapper">
    <header class="tip">{{bettingPlay.playDesc}}</header>
    <!-- 号码区 :6hc、pcdd和other-->
    <component :is="lotteryCode" :bettingPlay="bettingPlay" :code="code"></component>
  </div>
</template>

<script>
import component from './child_modal/index'
export default {
  props: ['code', 'lotteryPlay'],
  components:{...component},
  data () {
    return {
      bettingPlay: {}, //玩法
      layout: ''
    }
  },
  computed:{
    lotteryCode(){
      return this.code==='6hc'?'sixhc':this.code==='pcdd'?'pcdd':'other'
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
      layout.layout.forEach(item => {
        item.balls = item.balls.split('|');
      })
      this.bettingPlay = JSON.parse(JSON.stringify(data));
      this.bettingPlay.layout = layout;
    }
  },
}
</script>

<style lang="scss" scoped>
.lottery-betting-wrapper {
  height:100%;
  font-size: 30px;
  padding: 15px 15px 0;
  overflow:scroll;
  .tip {
    min-height: 48px;
    line-height: 48px;
    margin-bottom:15px;
    font-size:24px;
  }
}
</style>
