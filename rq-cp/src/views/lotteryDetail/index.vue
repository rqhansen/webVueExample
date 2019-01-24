<template>
  <section class="rq-lottery-detail">
    <header>
      <top :allLotterys="lotteryTypes"
           :defaultPlayId="defaultPlay.lotteryPlayId"
           :defaultPlayName="defaultPlay.playName"
           :lotteryId="lotteryId"
           :lotteryPlayList="lotteryPlayList"
           :subMenu="subMenu"
           @swith-lottery="switchLottery"></top>
    </header>
    <!-- 投注区域 -->
    <div class="lottery-detail-wrapper">
      <!-- <lottery-detail></lottery-detail> -->
    </div>
    <footer class="lottery-detail-footer"></footer>
  </section>
</template>

<script>
import top from './header'
import lotteryDetail from './lotteryDetail'

import { getAllLotteryTypes } from '@/api/lottery'
import { getDefaultPlay } from '@/api/lotteryDetail'
export default {
  name: 'lotteryDetail',
  components: {
    top,
    lotteryDetail
  },
  data () {
    return {
      allLotteryTypes: [],
      defaultPlay: [],
      lotteryPlayList: [],//玩法列表
      lotteryId: ''
    }
  },
  computed: {
    lotteryTypes () { //切换彩种---所有彩种
      if (!this.allLotteryTypes.length) return
      return this.allLotteryTypes.filter(item => item.code === 'all')[0].lotteryList;
    },
    subMenu () { //二级菜单
      if (!this.lotteryPlayList.length) return
      return this.lotteryPlayList.filter(item => item.lotteryPlayId === this.defaultPlay.lotteryPlayId.slice(0, 3))[0].lotteryPlayList;
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
    /**
     * 切换彩种
     */
    switchLottery (lotteryId) {
      this.$router.replace({ name: 'lotteryDetail', query: { id: lotteryId, excluMenu: true } });
      getDefaultPlay(lotteryId).then(res => {
        if (res.data.code === 0) {
          let { data: { data: { defaulPlay, lotteryPlayList, lottery: { lotteryId } } } } = res;
          this.defaultPlay = defaulPlay;
          this.lotteryPlayList = lotteryPlayList;
          this.lotteryId = lotteryId;
        }
      })
    },
    init (lotteryId) {
      return new Promise((resolve, reject) => {
        this.$http.all([getAllLotteryTypes(), getDefaultPlay(lotteryId)]).then(this.$http.spread((types, res) => {
          types.data.code !== 0 && (this.allLotteryTypes = types.data.lotteryTypeList);
          if (res.data.code === 0) {
            let { data: { data: { defaulPlay, lotteryPlayList, lottery: { lotteryId } } } } = res;
            this.defaultPlay = defaulPlay;
            this.lotteryPlayList = lotteryPlayList;
            this.lotteryId = lotteryId;
          }
          resolve();
        }))
      })
    }
  },
  created () {
    this.init(this.$route.query.id);
  }
}
</script>

<style lang="scss" scoped>
.rq-lottery-detail {
  .lottery-detail-wrapper {
    position: relative;
    height: calc(100vh - 184px);
    overflow: hidden;
  }
  .lottery-detail-footer {
    height: 96px;
  }
}
</style>
