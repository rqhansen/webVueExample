<template>
  <div class="lottery-betting-wrapper">
    <header class="tip">
      <span v-html="bettingPlay.playDesc"></span><span>【最大赔率:{{maxOdd}}】</span></header>
    <!-- 号码区 :6hc、pcdd和other-->
    <component :is="lotteryCode"
               :bettingPlay="bettingPlay"
               :code="code"
               :parentPlayId="parentPlayId"></component>
  </div>
</template>

<script>
import { escapeHtml } from '@/assets/js/utils/escape'
import component from './child_modal/index'
export default {
  props: ['code', 'lotteryPlay', 'parentPlayId'],
  components: { ...component },
  data () {
    return {
      layout: '',
      lotteryCode: '',
      maxOdd: '' //最大赔率
    }
  },
  computed: {
    bettingPlay () {
      if (!this.lotteryPlay.layout) return {} //排除空值
      let layout = JSON.parse(this.lotteryPlay.layout);
      layout.layout.forEach(item => {
        item.balls = item.balls.split('|');
      })
      let maxOdds = layout.rates.reduce((acc, rate) => {
        acc.push(rate.maxOdds);
        return acc;
      }, [])
      this.maxOdd = Math.max(...maxOdds);
      let bettingPlay = JSON.parse(JSON.stringify(this.lotteryPlay));
      bettingPlay.layout = layout;
      if (this.code === '6hc') {
        bettingPlay.playDesc = escapeHtml(bettingPlay.playDesc);
      }
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
    font-size: 30px;
    > span {
      &:last-child {
        margin-left: -10px;
        color: #f60;
      }
    }
  }
}
</style>
