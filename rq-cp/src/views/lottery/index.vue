<template>
  <div class="rq-lottery">
    <!-- 头部 -->
    <header class="header">
      <top @click-right="showAllLottery"></top>
    </header>
    <!-- 彩种展示区 -->
    <section class="lottery-wrapper">
      <header>
        <header-swipe :lotteryTypes="lotteryTypes"
                      @choice-type="choiceType"></header-swipe>
      </header>
      <!-- 全部彩种列表 -->
      <div class="lottery-list">
        <lottery :lotteryList="choiceLotteryList"></lottery>
      </div>
    </section>
    <!-- 侧边栏全部彩种 -->
    <transition name="fade-in-right">
      <section class="lottery-aside-list"
               v-show="isShowAllLottery">
        <allLottery :lotteryTypes="lotteryTypes"
                    @click-left="hideAllLottery"></allLottery>
      </section>
    </transition>
  </div>
</template>

<script>
import top from './header'
import headerSwipe from './headerSwipe'
import allLottery from './allLottery'
import lottery from './lottery'
export default {
  components: {
    top,
    headerSwipe,
    allLottery,
    lottery
  },
  data () {
    return {
      code: 'all',
      isShowAllLottery: false,
      allLotteryTypes: []
    }
  },
  computed: {
    lotteryTypes () {
      return this.allLotteryTypes.filter(item => item.code !== 'all')
    },
    choiceLotteryList () {
      if (this.allLotteryTypes.length === 0) return
      return this.allLotteryTypes.filter(item => item.code === this.code)[0].lotteryList
    }
  },
  methods: {
    showAllLottery () {
      this.isShowAllLottery = true;
    },
    hideAllLottery () {
      this.isShowAllLottery = false;
    },
    choiceType (code) {
      this.code = code;
      //切换tab时需要重新请求接口
    }
  },
  created () {
    this.$http.get("ajax/lottery/allLotteryTypes.json", { noEncrypt: true }).then(res => {
      this.allLotteryTypes = res.data.lotteryTypeList;
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/transition.scss";
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
    padding-top: 66px;
    header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #ec0022;
    }
    .lottery-list {
      height: calc(100vh - 248px);
      overflow: scroll;
    }
  }
  .lottery-aside-list {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    background-color: #fff;
    z-index: 1000;
  }
}
</style>
