<template>
  <section class="rq-lottery-detail">
    <header>
      <top @show-lottery-types="showLotteryTypes"></top>
    </header>
    <!-- 投注区域 -->
    <div class="lottery-detail-wrapper">
      <!-- <lottery-detail></lottery-detail> -->
      <!-- 蒙层 -->
      <transition name="drop-down">
        <div class="lottery-detail-layer"
             v-show="isShowLotteryTypes || isShowLotteryPlay">
          <lottery-play v-show="isShowLotteryPlay"></lottery-play>
          <lottery-types :allLotterys="lotteryTypes"></lottery-types>
        </div>
      </transition>
    </div>

    <footer class="lottery-detail-footer"></footer>
  </section>
</template>

<script>
import top from './header'
import lotteryDetail from './lotteryDetail'
import lotteryTypes from './lotteryTypes'
import lotteryPlay from './lotteryPlay'
import { getAllLotteryTypes } from '@/api/lottery'
// import { getPrizeDetail } from '@/api/lotteryDetail'
export default {
  name: 'lotteryDetail',
  components: {
    top,
    lotteryDetail,
    lotteryTypes,
    lotteryPlay
  },
  data () {
    return {
      allLotteryTypes: [],
      isShowLotteryPlay: false, //是否显示玩法
      isShowLotteryTypes: false,//是否显示所有彩种
    }
  },
  computed: {
    lotteryTypes () { //切换彩种---所有彩种
      if (!this.allLotteryTypes.length) return
      return this.allLotteryTypes.filter(item => item.code === 'all')[0].lotteryList;
    }
  },
  methods: {
    showLotteryTypes (flag) {
      this.isShowLotteryTypes = flag;
    },
    init () {
      return new Promise((resolve, reject) => {
        this.$http.all([getAllLotteryTypes()]).then(this.$http.spread((types) => {
          types.data.code !== 0 && (this.allLotteryTypes = types.data.lotteryTypeList);
          resolve();
        }))
      })
    }
  },
  created () {
    this.init();
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/transition.scss";
.rq-lottery-detail {
  .lottery-detail-wrapper {
    position: relative;
    height: calc(100vh - 184px);
    overflow: hidden;
    .lottery-detail-layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .lottery-detail-footer {
    height: 96px;
  }
}
</style>
