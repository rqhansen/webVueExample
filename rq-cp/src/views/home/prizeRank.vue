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
      <div class="rq-srcoll-wrapper"
           ref="scroll-wrapper">
        <ul class="scroll-content"
            :style="'transform:translateY('+scrollTop+'px)'"
            ref="scroll-inner">
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
      prizeRankList: [],
      scrollTop: -200,
      scrollInner: '',
      scrollWrap: ''
    }
  },
  methods: {
    setScroll () {
      let vm = this;
      setTimeout(() => {
        vm.scrollTop -= 4;
        if (!vm.getScrollObjPos()) {
          vm.setScroll();
        } else {
          vm.scrollTop = 0;
          vm.setScroll();
        }
      }, 25)
    },
    /**
     * 获取元素的Bounding信息
     */
    getBoundingInfo (ele) {
      return ele.getBoundingClientRect();
    },
    /**
     * 判断内容是否超出容器
     */
    getScrollObjPos () {
      let [content, wrap] = ['', ''];
      if (this.scrollInner && this.scrollWrap) {
        content = this.scrollInner;
        wrap = this.scrollWrap;
      } else {
        content = this.$refs['scroll-inner'];
        wrap = this.$refs["scroll-wrapper"];
      }
      let [{ bottom: btm1 }, { bottom: btm2 }] = [this.getBoundingInfo(content), this.getBoundingInfo(wrap)];
      if (btm1 <= btm2) {
        return true
      }
      return false;
    }
  },
  mounted () {
    setTimeout(() => {
      let [innerHeight, outHeight] = [this.$refs["scroll-inner"].offsetHeight, this.$refs["scroll-wrapper"].offsetHeight];
      if (innerHeight - outHeight > 0) { //内容超出容器则滚动
        this.setScroll();
      }
    }, 100)
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
    position: relative;
    height: 480px;
    overflow: hidden;
  }
  .scroll-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
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
}
</style>
