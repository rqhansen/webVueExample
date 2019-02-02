<template>
  <div class="lottery-count-down">
    <template v-if="timerInfo.hours">
      <span class="time">{{timerInfo.hours}}</span><span class="split">:</span><span class="time">{{timerInfo.minutes}}</span><span class="split">:</span><span class="time">{{timerInfo.seconds}}</span>
    </template>
    <template v-else>
      <span>开奖中...</span>
    </template>
  </div>
</template>

<script>
import utils from '@/assets/js/utils/index'
export default {
  props: ['nextPrizeTime', 'currTime'],
  data () {
    return {
      timerInfo: {},
      timer: ''
    }
  },
  watch: {
    currTime: {
      handler: 'getTimerInfo',
      immediate: true
    }
  },
  methods: {
    getTimerInfo () {
      let diffTime = this.nextPrizeTime - this.currTime
      this.timerInfo = utils.countDown(diffTime);
      this.timer = setInterval(() => {
        diffTime -= 1000;
        if (diffTime < 0) {
          clearInterval(this.timer);
          this.timerInfo = {};
          return
        }
        this.timerInfo = utils.countDown(diffTime);
      }, 1000)
    }
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer);
  }
}
</script>

<style lang="scss" scoped>
.lottery-count-down {
  font-size: 0;
  color: #ec0022;
  span {
    display: inline-block;
    font-size: 24px;
    &.split {
      width: 8px;
      height: 32px;
      margin: 0 4px;
      line-height: 32px;
    }
    &.time {
      width: 34px;
      height: 34px;
      line-height: 34px;
      border-radius: 6px;
      color: #fff;
      text-align: center;
      background-color: #ec0022;
    }
  }
}
</style>
