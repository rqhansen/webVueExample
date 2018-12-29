<template>
  <div class="rq-home">
    <!-- 页头 -->
    <header class="rq-header">
      <top></top>
    </header>
    <!-- 轮播 -->
    <div v-refresh>
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
      isLoading: false
    }
  }
};
</script>
 
<style lang="scss" scoped>
.rq-home {
  padding-top: 88px;
  .rq-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  hr {
    width: 100%;
    height: 20px;
    background-color: #f3f3f3;
  }
}
</style>
