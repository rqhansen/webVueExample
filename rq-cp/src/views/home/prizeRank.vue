<template>
  <div class="rq-home-prize-rank">
    <header>
      <svg-icon icon-class="cup"></svg-icon>
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
      scrollTop: 0,
      scrollInner: '',
      scrollWrap: ''
    }
  },
  methods: {
    setScroll () {
      let vm = this;
      setTimeout(() => {
        vm.scrollTop -= 10;
        if (!vm.getScrollObjPos()) {
          vm.setScroll();
        } else {
          vm.scrollTop = 0;
          vm.setScroll();
        }
      }, 100)
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
      if (!content || !wrap) return
      function getBoundingInfo (ele) {
        return ele.getBoundingClientRect()
      };
      let [{ bottom: contentBtm }, { bottom: wrapBtm }] = [getBoundingInfo(content), getBoundingInfo(wrap)];
      if (contentBtm <= wrapBtm) {
        return true
      }
      return false;
    }
  },
  created () {
    this.$http.get("/ajax/home/prizeRank.json").then(res => {
      this.prizeRankList = res.data.prizeRankList;
      this.$nextTick(() => {
        if (this.prizeRankList.length > 8) {
          this.setScroll();
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@mixin alignCenter($height, $line-height) {
  height: #{$height}px;
  line-height: #{$line-height}px;
}
.rq-home-prize-rank {
  header {
    padding-left: 20px;
    @include alignCenter(80, 80);
    border-bottom: 1px solid #eee;
    overflow: hidden;
    span {
      vertical-align: top;
      color: #747474;
      font-size: 30px;
    }
    .svg-icon {
      @extend span;
      margin-right: 20px;
      font-size: 48px;
      vertical-align: 3px;
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
      @include alignCenter(60, 60);
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
