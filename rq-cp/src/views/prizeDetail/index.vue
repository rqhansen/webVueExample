<template>
  <div class="rq-prize-detail">
    <header class="header">
      <top></top>
    </header>
    <section class="">

    </section>
  </div>
</template>

<script>
import top from './header'
export default {
  components: {
    top
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
    init () {
      let id = this.$route.query.id;
      return new Promise((resolve, reject) => {
        this.$http.get(`/ajax/prizeDetail/${id}.json`, { noEncrypt: true }).then(res => {
          let data = res.data;
          if (data.code === 0) {
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
}
</style>
