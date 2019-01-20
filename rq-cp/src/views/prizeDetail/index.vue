<template>
  <div class="rq-prize-detail">
    <header class="header">
      <top></top>
    </header>
    <section class="prize-detail-wrapper">
      <div v-refresh="refresh">
        <header>
          <lottery-header :lottery="lottery"></lottery-header>
        </header>
        <div class="prize-detail-content">
          <prize-content :prizeHistoryList="prizeHistoryList"
                         :code="lottery.code"></prize-content>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import top from './header'
import lotteryHeader from './lotteryHeader'
import prizeContent from './prizeContent'
import { getPrizeDetail } from '@/api/prizeDetail'
export default {
  components: {
    top,
    lotteryHeader,
    prizeContent
  },
  data () {
    return {
      lottery: {},
      prizeHistoryList: []
    }
  },
  watch: {
    $route: {
      handler (newVal) {
        if (newVal.name === 'prizeDetail') {
          this.init();
        }
      },
      immediate: true
    }
  },
  methods: {
    refresh () {
      return this.$refresh(this.init, { tip: '开奖详情页面刷新成功' })
    },
    init () {
      let id = this.$route.query.id;
      return new Promise((resolve, reject) => {
        getPrizeDetail(id).then(res => {
          let data = res.data;
          if (res.data.code === 0) {
            this.lottery = data.data.lottery;
            this.prizeHistoryList = data.data.prizeHistoryList;
          }
          resolve();
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.rq-prize-detail {
  padding: 88px 0 96px 0;
  .header {
    position: fixed;
    left: 0;
    top: 0;
  }
  .prize-detail-wrapper {
    height: calc(100vh - 184px);
    overflow: scroll;
  }
}
</style>
