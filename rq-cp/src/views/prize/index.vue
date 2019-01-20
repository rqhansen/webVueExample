<template>
  <div class="rq-prize">
    <header class="header">
      <top></top>
    </header>
    <section class="prize-wrapper">
      <div v-refresh="refresh">
        <prizeList :prizeList="prizeList"></prizeList>
      </div>
    </section>
  </div>
</template>

<script>
import top from './header'
import prizeList from './prizeList'
import { getPrizeList } from '@/api/prize'
export default {
  components: {
    top,
    prizeList
  },
  data () {
    return {
      prizeList: []
    }
  },
  methods: {
    refresh () {
      return this.$refresh(this.init, { tip: '开奖数据刷新了' })
    },
    init () {
      return new Promise((resolve, reject) => {
        this.$http.all([getPrizeList()]).then(this.$http.spread(res => {
          res.data.code === 0 && (this.prizeList = res.data.lotteryList);
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
.rq-prize {
  padding: 88px 0 96px 0;
  .header {
    position: fixed;
    top: 0;
    left: 0;
  }
  .prize-wrapper {
    height: calc(100vh - 184px);
    overflow: scroll;
  }
}
</style>
