<template>
  <section class="rq-lottery-detail">
    <header>
      <top :defaultPlayName="defaultPlay.playName"
           :isShowPlay="isShowPlay"
           :isShowLottery="isShowLottery"
           :bettingInfo="bettingInfo"
           @switch-lottery="switchLotteryTypes"
           @switch-play="switchPlay"
           @cancel-select-balls="cancleSelectBalls"></top>
    </header>
    <!-- 投注区域 -->
    <div class="lottery-detail-wrapper">
      <!-- 投注 -->
      <lottery-betting :code="code"
                       ref="bet-wrapper"
                       :lotteryPlay="defaultPlay"
                       :parentPlayId="parentPlayId"
                       @get-balls="getBalls"></lottery-betting>

      <!-- 蒙层 -->
      <!-- 玩法 -->
      <transition name="drop-down">
        <div class="lottery-detail-layer"
             v-show="isShowPlay">
          <lottery-play :lotteryPlayList="lotteryPlayList"
                        :defaultPlayId="defaultPlay.lotteryPlayId"
                        :subMenu="subMenu"
                        :parentPlayId="parentPlayId"
                        @change-play="changePlay"
                        @set-parent-play-id="setParentPlayId"
                        @click.native.self="hideLotteryPlay"></lottery-play>
        </div>
      </transition>
      <!-- 彩种 -->
      <transition name="drop-down">
        <div class="lottery-detail-layer"
             v-show="isShowLottery">
          <lottery-types :allLotterys="lotteryTypes"
                         :lotteryId="lotteryId"
                         @change-lottery="switchLottery"
                         @click.native.self="hideLotteryTypes"></lottery-types>
        </div>
      </transition>
    </div>
    <footer class="lottery-detail-footer">
      <bottom :bettingInfo="bettingInfo"
              :code="code"
              ref="betting-btn"
              @random-bet="randomBet"
              @clear-select="clearSelected"></bottom>
    </footer>
  </section>
</template>

<script>
import top from './header'
import lotteryTypes from './lotteryTypes'
import lotteryPlay from './lotteryPlay'
import lotteryBetting from './lotteryBetting'
import bottom from './footer';
import { getAllLotteryTypes } from '@/api/lottery'
import { getDefaultPlay } from '@/api/lotteryDetail'
export default {
  name: 'lotteryDetail',
  components: {
    top,
    lotteryBetting,
    lotteryTypes,
    lotteryPlay,
    bottom
  },
  data () {
    return {
      lotteryTypes: [],//所有彩票类型
      subMenu: [],//二三级菜单
      defaultPlay: {},
      lotteryPlayList: [],//玩法列表
      lotteryId: '',
      isShowPlay: false, //切换玩法
      isShowLottery: false, //切换彩种
      code: '',
      parentPlayId: '', //父级Id
      bettingPlayId: '', //去betting的父级Id
      bettingInfo: { len: 0, maxOdd: 0 } //投注信息
    }
  },
  watch: {
    '$route' (to) {
      if (to.name === 'lotteryDetail' && !to.query.excluMenu) {//excluMenu：true,不请求allLotteryTypes
        this.init(to.query.id);
      }
    }
  },
  methods: {
    cancleSelectBalls () {//取消当前选号
      this.$refs['bet-wrapper'].$refs['bet-content'].clearSelected();
    },
    clearSelected () { //调用投注页的清除选号
      this.$refs['bet-wrapper'].$refs['bet-content'].clearSelected();
    },
    randomBet () { //调用投注页的随机一注
      this.$refs['bet-wrapper'].$refs['bet-content'].randomBet();
    },
    getBalls (ballsInfo) { //子组件的投注信息传过来
      this.bettingInfo = ballsInfo;
    },
    /**
     * 上次投注信息归零
     */
    clearSelect () {
      for (let i of Object.keys(this.bettingInfo)) {
        this.bettingInfo[i] = 0;
      }
      this.$refs['betting-btn'].clearSelect();
      this.$refs['bet-wrapper'].$refs['bet-content'].clearSelected();
    },
    /**
     * 点击蒙层其它地方隐藏彩种
     */
    hideLotteryTypes () {
      this.isShowLottery = false;
    },
    /**
     * 点击蒙层其它地方隐藏玩法
     */
    hideLotteryPlay () {
      this.isShowPlay = false;
    },
    /**
     * 隐藏蒙层
     */
    hideLayout () {
      this.isShowPlay && (this.isShowPlay = false);
      this.isShowLottery && (this.isShowLottery = false);
    },
    /**
     * 设置父级Id
     */
    setParentPlayId (parentPlayId) {
      this.parentPlayId = parentPlayId;
    },
    /**
     * 切换同一彩种的玩法
     */
    changePlay (play) {
      this.defaultPlay = play;
      this.clearSelect();
      this.isShowPlay && (this.isShowPlay = false);
    },
    /**
     * 显示玩法蒙层
     */
    switchPlay (flag) {
      this.isShowPlay = flag;
    },
    /**
     * 显示彩种蒙层
     */
    switchLotteryTypes (flag) {
      this.isShowLottery = flag;
    },
    /**
     * 切换彩种
     * excluMenu:true表示只请求玩法
     */
    switchLottery (lotteryId) {
      this.clearSelect();
      this.hideLayout();
      this.$router.replace({ name: 'lotteryDetail', query: { id: lotteryId, excluMenu: true } });
      this.getDefaultPlay(lotteryId);
    },
    getDefaultPlay (lotteryId) { //获取玩法id
      return new Promise((resolve, reject) => {
        getDefaultPlay(lotteryId).then(res => {
          if (res.data.code === 0) { //每个彩种玩法
            let { data: { data: { defaulPlay, lotteryPlayList, defaulPlay: { lotteryPlayId }, lottery: { code, lotteryId } } } } = res;
            if (code !== 'pcdd') { //pcdd的父级与自身同级，parentId即为自身lotterPlayId
              lotteryPlayId = lotteryPlayId.slice(0, 3);
            }
            this.code = code;
            this.defaultPlay = defaulPlay;
            this.lotteryPlayList = lotteryPlayList;
            this.parentPlayId = lotteryPlayId; //父级Id
            this.lotteryId = lotteryId;
            this.subMenu = this.lotteryPlayList.filter(item => item.lotteryPlayId === lotteryPlayId)[0].lotteryPlayList;
            resolve();
          }
        })
      })
    },
    init (lotteryId) { //获取玩法和所有彩种
      return new Promise((resolve, reject) => {
        Promise.all([this.getDefaultPlay(lotteryId), getAllLotteryType.call(this)]).then(() => {
          resolve();
        });
      })
      function getAllLotteryType () { //获取所有彩种类型
        return new Promise((resolve, reject) => {
          getAllLotteryTypes().then(res => {
            if (res.data.code !== 0) {
              this.lotteryTypes = res.data.lotteryTypeList.filter(item => item.code === 'all')[0].lotteryList;
              resolve();
            }
          })
        })
      }
    }
  },
  created () {
    this.init(this.$route.query.id);
  },
  deactivated () {
    this.hideLayout();
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
      height: 100%;
      background-color: #eee;
      z-index: 2;
    }
  }
  .lottery-detail-footer {
    height: 96px;
  }
}
</style>
