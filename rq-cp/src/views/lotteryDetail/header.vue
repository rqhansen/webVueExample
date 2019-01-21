<template>
  <div class="lottery-detail-header">
    <vux-header @click-left="$router.go(-1)">
      <div slot="center"
           class="lottery-name-wrapper">
        <div class="lottery-name"
             @click="changePlay">
          <span>总和</span>
          <span class="tri"
                :class="{'round':isSwitchPlay}">
            <svg-icon icon-class="up-triangle"></svg-icon>
          </span>
        </div>
      </div>
      <div slot="right">
        <div class="change-lottery"
             @click="changeLottery">
          <span>切换彩种</span>
          <span class="tri"
                :class="{'round':isSwitchLottery}">
            <svg-icon icon-class="arrow_up"></svg-icon>
          </span>
        </div>
      </div>
    </vux-header>
  </div>
</template>

<script>
export default {
  props: ['allLotteryTypes'],
  data () {
    return {
      isSwitchPlay: false, //切换玩法
      isSwitchLottery: false
    }
  },
  methods: {
    /**
     * 切换玩法
     */
    changePlay () {
      this.isSwitchPlay = !this.isSwitchPlay
    },
    /**
     * 切换彩种
     */
    changeLottery () {
      this.isSwitchLottery = !this.isSwitchLottery;
      this.$emit('show-lottery-types', this.isSwitchLottery);
    }

  },
  created () {
    // console.log(this.allLotteryTypes);
  }
}
</script>

<style lang="scss" scoped>
.lottery-detail-header {
  .rq-header-tool {
    font-size: 30px;
  }
  .lottery-name-wrapper {
    .lottery-name {
      display: inline-block;
      width: auto;
      padding: 0 2px 0 10px;
      height: 50px;
      line-height: 50px;
      border: 2px solid #fff;
      text-align: center;
      border-radius: 6px;
    }
  }
  .change-lottery {
    .tri {
      margin-left: 8px;
    }
  }
  .tri {
    .svg-icon {
      position: relative;
      top: 1px;
      transition: transform 0.3s;
    }
  }
  .round {
    .svg-icon {
      transform: rotate(180deg);
    }
  }
}
</style>
