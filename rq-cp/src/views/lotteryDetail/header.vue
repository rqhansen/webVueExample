<template>
  <div class="lottery-detail-header">
    <vux-header @click-left="goBack">
      <div slot="center"
           class="lottery-name-wrapper">
        <div class="lottery-name"
             @click="changePlay">
          <span>{{defaultPlayName}}</span>
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
  props: ['defaultPlayName', 'isShowPlay', 'isShowLottery', 'bettingInfo'],
  data () {
    return {
      isSwitchPlay: false, //切换玩法
      isSwitchLottery: false,
      betInfo: {}
    }
  },
  watch: {
    isShowPlay (newVal) {
      this.isSwitchPlay = newVal;
    },
    isShowLottery (newVal) {
      this.isSwitchLottery = newVal;
    }
  },
  methods: {
    /**
     * 后退
     */
    goBack () {
      if (!this.bettingInfo.len) {
        this.$router.go(-1);
        return
      }
      this.$dialog.confirm({
        title: '温馨提示',
        message: '放弃当前的选号吗?'
      }).then(() => {
        this.$emit('cancel-select-balls');
        this.$router.go(-1);
      }).catch(() => {
        // cancle
      });
    },
    /**
     * 切换玩法
     */
    changePlay () {
      this.isSwitchLottery && (this.isSwitchLottery = false);
      this.isSwitchPlay = !this.isSwitchPlay
      this.$emit('switch-play', this.isSwitchPlay);
      this.$emit('switch-lottery', this.isSwitchLottery);
    },
    /**
     * 切换彩种
     */
    changeLottery () {
      this.isSwitchPlay && (this.isSwitchPlay = false);
      this.isSwitchLottery = !this.isSwitchLottery;
      this.$emit('switch-lottery', this.isSwitchLottery);
      this.$emit('switch-play', this.isSwitchPlay);

    }
  },
  deactivated () {
    this.isSwitchLottery && (this.isSwitchLottery = false);
    this.isSwitchPlay && (this.isSwitchPlay = false);
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
      border: 1px solid #fff;
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
