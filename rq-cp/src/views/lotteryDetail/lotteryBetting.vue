<template>
  <div class="lottery-betting-wrapper">
    <header class="tip">{{bettingPlay.playDesc}}</header>
    <!-- 号码区 :6hc、pcdd和other-->
    <component :is="lotteryCode"
               :bettingPlay="bettingPlay"
               :code="code"
               :parentPlayId="parentPlayId"></component>
  </div>
</template>

<script>
import component from './child_modal/index'
export default {
  props: ['code', 'lotteryPlay', 'parentPlayId'],
  components: { ...component },
  data () {
    return {
      layout: '',
      lotteryCode: ''
    }
  },
  computed: {
    bettingPlay () {
      if (!this.lotteryPlay.layout) return {} //排除空值
      let layout = JSON.parse(this.lotteryPlay.layout);
      layout.layout.forEach(item => {
        item.balls = item.balls.split('|');
      })
      let bettingPlay = JSON.parse(JSON.stringify(this.lotteryPlay));
      bettingPlay.layout = layout;
      return bettingPlay;
    }
  },
  watch: {
    code (newVal) {
      this.lotteryCode = newVal === '6hc' ? 'sixhc' : newVal === 'pcdd' ? 'pcdd' : 'other'
    }
  }
}
</script>

<style lang="scss" scoped>
.lottery-betting-wrapper {
  height: 100%;
  font-size: 30px;
  padding: 15px 15px 0;
  overflow: scroll;
  .tip {
    min-height: 48px;
    line-height: 48px;
    margin-bottom: 15px;
    font-size: 24px;
  }
}
</style>
