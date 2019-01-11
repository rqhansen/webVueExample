<template>
  <div class="rq-lottery">
    <!-- 头部 -->
    <header class="header">
      <top></top>
    </header>
    <!-- 彩种展示区 -->
    <section class="lottery-wrapper">
      <header>
        <header-swipe :lotteryTypes="lotteryTypes"></header-swipe>
      </header>
    </section>
    <!-- 全部彩种 -->
    <transition name="fade-left">
      <section class="lottery-aside-list">
        <allLottery :lotteryTypes="lotteryTypes"></allLottery>
      </section>
    </transition>
  </div>
</template>

<script>
import top from './header'
import headerSwipe from './headerSwipe'
import allLottery from './allLottery'
export default {
  components: {
    top,
    headerSwipe,
    allLottery
  },
  data () {
    return {
      allLotteryTypes: []
    }
  },
  computed: {
    lotteryTypes () {
      return this.allLotteryTypes.filter(item => item.code !== 'all')
    }
  },
  created () {
    this.$http.get("ajax/lottery/allLotteryTypes.json", { noEncrypt: true }).then(res => {
      this.allLotteryTypes = res.data.lotteryTypeList;
    });
  }
}
</script>

<style lang="scss" scoped>
.rq-lottery {
  position: relative;
  padding-top: 88px;
  padding-bottom: 96px;
  .header {
    position: fixed;
    top: 0;
    left: 0;
  }
  .lottery-wrapper {
    position: relative;
    height: calc(100vh - 184px);
    padding-top: 72px;
    header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #ec0022;
    }
  }
  .lottery-aside-list {
    position: absolute;
    left: 100%;
    top: 0;
    height: 100vh;
    background-color: #fff;
    z-index: 2;
  }
  .fade-left-enter {
    transform: translate3d(100%, 0, 0);
  }
  .fade-left-enter-active {
    transition: all 0.3s;
  }
}
</style>
