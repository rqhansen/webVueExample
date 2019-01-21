<template>
  <div class="all-lotterys-wrapper">
    <div class="all-lotterys">
      <ul>
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
  props: ['allLotterys'],
  data () {
    return {
      lotteryIndex: -1
    }
  },
  methods: {
    changeLottery (item, idx) {
      if (this.lotteryIndex === idx) return
      this.lotteryIndex = idx;
    }
  },
  created () {
    console.log(this.allLotterys);
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
  }
  ul {
    padding-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    li {
      display: inline-block;
      width: 230px;
      height: 56px;
      line-height: 56px;
      margin-top: 15px;
      color: #999;
      text-align: center;
      border: 1px solid #eee;
      border-radius: 6px;
      font-size: 30px;
      &.active {
        color: #ec0022;
        border-color: #ec0022;
      }
    }
  }
}
</style>
