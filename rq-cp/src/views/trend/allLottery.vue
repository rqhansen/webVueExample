<template>
  <div class="all-lottery">
    <header>
      <vux-header :hasBack="true"
                  v-on="$listeners">
        <span slot="center">全部彩种</span>
      </vux-header>
    </header>
    <!-- 彩种列表 -->
    <div class="lottery-list">
      <dl v-for="(list,idx) of types"
          :key="idx">
        <dt>{{list.lotteryTypeName}}</dt>
        <dd>
          <ul>
            <li v-for="(item,index) of list.lotteryList"
                :key="index"
                :class="{'active':lotteryId===item.lotteryId}"
                @click="selectLottery(item)">
              <span>{{item.lotteryName}}</span>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['lotteryTypes'],
  data () {
    return {
      lotteryId: ''
    }
  },
  computed: {
    types () {
      return this.lotteryTypes.filter(list => list.code !== 'all');
    }
  },
  methods: {
    selectLottery (lottery) {
      if (this.lotteryId === lottery.lotteryId) return;
      this.lotteryId = lottery.lotteryId;
    },
    goPath (lotteryId) {
      // this.$router.push({ name: 'lotteryDetail', query: { id: lotteryId } });
    }
  }
}
</script>

<style lang="scss" scoped>
.all-lottery {
  height: 100vh;
  padding: 88px 0 96px;
  overflow: scroll;
  > header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .lottery-list {
    background-color: #eee;
    dl {
      padding: 0 15px;
      border-bottom: 1px solid #c3c3c3;
    }
    dt {
      width: 100%;
      height: 60px;
      line-height: 60px;
      padding-left: 15px;
      font-size: 30px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100vw;
      color: #212121;
      li {
        width: 210px;
        height: 84px;
        margin: 0 15px 15px;
        line-height: 84px;
        font-size: 28px;
        text-align: center;
        border: 1px solid #c3c3c3;
        border-radius: 12px;
        background-color: #fff;
        transition: all 0.3s;
        &.active {
          color: #fff;
          background-color: #ff7614;
          border-color: #ff7614;
        }
      }
    }
  }
}
</style>
