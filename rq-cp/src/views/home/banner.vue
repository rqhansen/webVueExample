<template>
  <div class="rq-home-banner">
    <van-swipe :autoplay="2000"
               indicator-color="#fc7716">
      <van-swipe-item v-for="item of imgList"
                      :key="item.id">
        <img v-lazy="item.imgUrl">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "banner",
  data () {
    return {
      imgList: []
    }
  },
  created () {
    this.$http.get("ajax/home/banner.json", { noEncrypt: false }).then(res => {
      this.imgList = res.data.bannerList;
    });
  }
}
</script>

<style lang="scss" scoped>
.rq-home-banner {
  overflow: hidden;
  .van-swipe {
    height: 220px;
    img {
      width: 100%;
    }
    /deep/ .van-swipe__indicator {
      width: 12px;
      height: 12px;
    }
  }
}
</style>
