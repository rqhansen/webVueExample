<template>
  <div class="rq-home">
    <!-- 页头 -->
    <header class="rq-header">
      <top></top>
    </header>
    <!-- 轮播 -->
    <div class="rq-home-refresh-wrap">
      <div class="refresh-animation-wrap"
           v-refresh="refresh">
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
</template>

<script>
import top from './header';
import banner from './banner';
import announce from './announce';
import navigation from './navigation';
import hot from './hot';
import prizeRank from './prizeRank';
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
  methods: {
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
  // height: 100vh; //防止转场异常
  padding-top: 88px;
  padding-bottom: 96px;
  .rq-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  .rq-home-refresh-wrap {
    height: calc(100vh - 184px);
  }
  hr {
    width: 100%;
    height: 20px;
    background-color: #f3f3f3;
  }
}
</style>
