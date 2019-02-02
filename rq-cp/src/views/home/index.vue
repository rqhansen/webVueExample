<template>
  <div class="rq-home"
       :class="{'scroll-wrap':true}">
    <!-- 页头 -->
    <header class="rq-header"
            :style="{'opacity':opacity}">
      <top></top>
    </header>
    <!-- 轮播 -->
    <div class="rq-home-refresh-wrap">
      <div v-refresh="{funs:refresh,changeStyle:changeStyle}">
        <section>
          <banner :imgList="bannerList"></banner>
        </section>
        <!-- 公告 -->
        <article>
          <announce></announce>
        </article>
        <!--导航菜单-->
        <section>
          <navigation :fastMenus="fastMenus"></navigation>
        </section>
        <!--分割区 -->
        <hr />
        <!-- 热门 -->
        <section>
          <hot :lotteryList="hotList"></hot>
        </section>
        <!-- 分割区 -->
        <hr />
        <!-- 中奖排行榜 -->
        <section>
          <prize-rank :rankList="rankList"></prize-rank>
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
import { getBanners, getNavsMenu, getHotList, getPrizeList } from '@/api/home'
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
      bannerList: [],
      hotList: [],
      rankList: [],
      fastMenus: [],
      opacity: 0
    }
  },
  methods: {
    changeStyle (diff) {

      diff = diff < -200 ? -200 : diff > 200 ? 200 : diff;
      if (diff < 0) this.opacity = 1 - parseFloat(Math.abs(diff) / 200);
      console.log(this.opacity);
      // this.opacity
      // this.opacity = 
    },
    refresh () {
      return this.$refresh(this.init, { tip: '主页刷新成功' });
    },
    init () {
      return new Promise((resolve, reject) => {
        this.$http.all([getBanners(), getNavsMenu(), getHotList(), getPrizeList()]).then(this.$http.spread((bannerList, fastMenus, hotList, rankList) => {
          bannerList.data.code !== 0 && (this.bannerList = bannerList.data.bannerList);
          fastMenus.data.code !== 0 && (this.fastMenus = fastMenus.data.navigateList);
          hotList.data.code !== 0 && (this.hotList = hotList.data.hotLotteryList);
          rankList.data.code !== 0 && (this.rankList = rankList.data.prizeRankList);
          resolve();
        }));
      })
    }
  },
  created () {
    this.init();
  }
};
</script>
 
<style lang="scss" scoped>
.rq-home {
  padding-top: 88px;
  padding-bottom: 96px;
  overflow: hidden;
  .rq-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
  .rq-home-refresh-wrap {
    height: calc(100vh - 184px);
    overflow: scroll;
  }
  hr {
    width: 100%;
    height: 20px;
    background-color: #f3f3f3;
  }
}
</style>
