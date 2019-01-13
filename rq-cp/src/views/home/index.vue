<template>
  <div class="rq-home">
    <!-- 页头 -->
    <header class="rq-header">
      <top></top>
    </header>
    <!-- 轮播 -->
    <div class="rq-home-refresh-wrap"
         ref="rq-home-refresh-wrap">
      <div v-refresh="refresh">
        <section>
          <banner :imgList="imgList"></banner>
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
      scroll: "",
      imgList: [],
      hotList: [],
      rankList: []
    }
  },
  methods: {
    refresh () {
      return new Promise((resolve, reject) => {
        this.init().then(() => {
          alert("主页刷新成功");
          resolve();
        })
      })
    },
    getBanners () { //获取轮播数据
      return this.$http.get("ajax/home/banner.json", { noEncrypt: false });
    },
    getHotList () { //获取热门排行
      return this.$http.get("/ajax/home/hot.json", { noEncrypt: true });
    },
    getRankList () { //获取中奖排行榜
      return this.$http.get("/ajax/home/prizeRank.json", { noEncrypt: false })
    },
    init () {
      return new Promise((resolve, reject) => {
        this.$http.all([this.getBanners(), this.getHotList(), this.getRankList()]).then(this.$http.spread((bannerList, hotList, rankList) => {
          bannerList.data.code !== 0 && (this.imgList = bannerList.data.bannerList);
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
