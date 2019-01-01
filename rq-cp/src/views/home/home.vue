<template>
  <div class="rq-home">
    <!-- 页头 -->
    <header class="rq-header">
      <top></top>
    </header>
    <!-- 轮播 -->
    <!-- <div> -->
    <div>
      <div class="refresh"
           :style="`top:${top};height:${top}px;line-height:${top}px`">刷新了</div>
      <div ref="scroll-wrap"
           class="scroll-wrap">

        <div class="scroll-content">
          <section>
            <banner></banner>
          </section>
          <!-- 公告 -->
          <article>
            <announce></announce>
          </article>
          <!--导航菜单-->
          <section>
            <navigation></navigation>
          </section>
          <!--分割区 -->
          <hr />
          <!-- 热门 -->
          <section>
            <hot></hot>
          </section>
          <!-- 分割区 -->
          <hr />
          <!-- 中奖排行榜 -->
          <section>
            <prize-rank></prize-rank>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top from './header';
import banner from './banner';
import announce from './announce';
import navigation from './navigation';
import hot from './hot';
import prizeRank from './prizeRank';
import BScroll from 'better-scroll'
export default {
  name: "home",
  components: {
    top,
    banner,
    announce,
    navigation,
    hot,
    prizeRank
  },
  data () {
    return {
      isLoading: false,
      top: 0,
      scroll: ""
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll();
    })
  },
  methods: {
    _initScroll () {
      let vm = this;
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs['scroll-wrap'], {
          probeType: 2
        });
        this.scroll.on("scroll", pos => {
          console.log(pos);
          vm.top = pos.y;
        })
        if (this.scroll) {
          this.scroll.refresh();
        } else {
          this.scroll = new BScroll(this.$refs['scroll-wrap'], {
            probeType: 3,
            click: true
          });
        }
      }
    },
    refresh () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('刷新了');
          resolve();
        }, 1200)
      })
    }
  }
};
</script>
 
<style lang="scss" scoped>
.rq-home {
  padding-top: 88px;
  padding-bottom: 96px;
  .rq-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  hr {
    width: 100%;
    height: 20px;
    background-color: #f3f3f3;
  }
  .scroll-wrap {
    height: calc(100vh - 184px);
    overflow: hidden;
    .refresh {
      position: absolute;
      left: 0;
      width: 100%;
      text-align: center;
    }
  }
}
</style>
