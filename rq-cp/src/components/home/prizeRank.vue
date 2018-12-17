<template>
  <div class="rq-home-prize-rank">
    <header>
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-prize-cup"></use>
      </svg>
      <span>最新中奖榜</span>
    </header>
    <section>
      <div class="rq-srcoll-wrapper">
        <ul class="scroll-content"
            ref="scroll-ul">
          <li v-for="item of prizeRankList"
              :key="item.rankingNo">
            <span>{{item.userCode}}</span>
            <span>喜中{{item.prizeTotal}}元</span>
            <span>{{item.lotteryName}}</span>
          </li>
        </ul>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: "prizeRank",
  data () {
    return {
      prizeRankList: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      console.log(this.$refs["scroll-ul"].height);
    })

  },
  created () {
    this.$http.get("/ajax/home/prizeRank.json").then(res => {
      this.prizeRankList = res.data.prizeRankList;
    })
  }
}
</script>

<style lang="scss" scoped>
.rq-home-prize-rank {
  header {
    height: 80px;
    padding-left: 20px;
    line-height: 80px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    span {
      vertical-align: top;
      color: #747474;
      font-size: 30px;
    }
  }
  .rq-srcoll-wrapper {
    height: 480px;
    overflow: hidden;
  }
  li {
    height: 60px;
    line-height: 60px;
    font-size: 26px;
    span {
      display: inline-block;
      width: 30%;
      text-align: center;
      &:first-child {
        padding-left: 40px;
        text-align: left;
      }
      &:nth-child(2) {
        width: 40%;
        color: #ec0022;
      }
    }
  }
}
</style>
