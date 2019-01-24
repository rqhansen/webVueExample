<template>
  <div class="all-lotterys-wrapper">
    <div class="all-lotterys">
      <ul class="a-menu">
        <li v-for="(item,idx) of allLotterys"
            :key="item.lotteryId"
            :class="{'active':lotId===item.lotteryId}"
            @click="changeLottery(item,idx)">{{item.lotteryName}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['allLotterys', 'lotteryId'],
  data () {
    return {
      lotId: ''
    }
  },
  watch: {
    lotteryId (newVal) {
      this.lotId = newVal;
    }
  },
  methods: {
    /**
     * 切换彩种
     */
    changeLottery (item, idx) {
      if (this.lotId === item.lotteryId) return
      this.lotId === item.lotteryId;
      this.$emit('change-lottery', item.lotteryId);
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
