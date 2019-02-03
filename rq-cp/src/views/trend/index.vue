<template>
  <section class="rq-trend">
    <header>
      <top @click-center="isShowLotteryTypes=true"></top>
    </header>
    <!-- 走势内容 -->
    <div class="rq-trend-wrapper">
      <hr>
      <div class="trend-tab-wrapper">
        <trend-types :typeTabs="disps"></trend-types>
      </div>
    </div>
    <!-- 侧边栏所有彩种 -->
    <transition name="fade-in-right">
      <div class="rq-trend-all-types"
           v-show="isShowLotteryTypes">
        <all-lottery :lotteryTypes="allLotteryTypes"
                     @click-left="isShowLotteryTypes=false"></all-lottery>
      </div>
    </transition>
  </section>
</template>

<script>
import top from './header';
import allLottery from './allLottery';
import trendTypes from './trendTypes';
import { getAllLotteryTypes } from '@/api/lottery'
import { getAllDisplays } from '@/api/trend'
export default {
  name: 'trend',
  components: { top, allLottery, trendTypes },
  data () {
    return {
      allLotteryTypes: [], //所有彩种
      isShowLotteryTypes: false, //显示所有彩种
      disps: [] //走势类型
    }
  },
  methods: {
    init () {
      let lotteryId = this.$route.query.id;
      return new Promise((resolve, reject) => {
        this.$http.all([getAllLotteryTypes(), getAllDisplays(lotteryId)]).then(this.$http.spread((allLotteryTypes, plays) => {
          allLotteryTypes.data.code !== 0 && (this.allLotteryTypes = allLotteryTypes.data.lotteryTypeList);
          plays.data.code === 0 && (this.disps = plays.data.data.disps);
          resolve();
        })
        )
      })
    }
  },
  created () {
    this.init();
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/transition.scss";
.rq-trend {
  padding: 88px 0 96px;
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .rq-trend-wrapper {
    height: calc(100vh - 184px);
    overflow: scroll;
    hr {
      height: 24px;
      background-color: #eee;
    }
  }
  .rq-trend-all-types {
    @extend header;
    z-index: 1000;
  }
}
</style>
