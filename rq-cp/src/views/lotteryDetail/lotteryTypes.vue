<template>
  <div class="all-lotterys-wrapper">
    <div class="all-lotterys">
      <ul class="a-menu">
        <li v-for="(item,idx) of allLotterys"
            :key="item.lotteryId"
            :class="{'active':lotteryIndex===idx}"
            @click="changeLottery(item,idx)">{{item.lotteryName}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lotteryIndex: -1
    }
  },
  computed: {
    allLotterys () {
      return this.$attrs.allLotterys;
    },
    lotteryId () {
      return this.$attrs.lotteryId;
    }
  },
  watch: {
    lotteryId (newVal) {
      this.lotteryIndex = this.allLotterys.findIndex(item => item.lotteryId === newVal);
    }
  },
  methods: {
    /**
     * 切换彩种
     */
    changeLottery (item, idx) {
      if (this.lotteryIndex === idx) return
      this.lotteryIndex = idx;
      this.$emit('swith-lottery', item.lotteryId);
    }
  }
}
</script>

<style lang="scss" scoped>
.all-lotterys-wrapper {
  height: 100%;
  background-color: rgba(3, 3, 3, 0.31);
  .all-lotterys {
    height: 441px;
    background-color: #fff;
    overflow: scroll;
    @import "./common.scss";
    .a-menu {
      li {
        width: 230px;
      }
    }
  }
}
</style>
