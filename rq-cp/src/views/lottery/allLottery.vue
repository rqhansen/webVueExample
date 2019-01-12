<template>
  <div class="all-lottery">
    <vux-header :hasBack="true"
                v-on="$listeners">
      <span slot="center">全部彩种</span>
    </vux-header>
    <!-- 彩种列表 -->
    <div class="lottery-list">
      <dl v-for="(list,idx) of lotteryTypes"
          :key="idx">
        <dt>{{list.lotteryTypeName}}</dt>
        <dd>
          <ul>
            <li v-for="(item,index) of list.lotteryList"
                :key="index"
                class="touch-feedback"
                v-feedBackClick>
              <div style="margin-bottom:5px;"><img :src="item.lotteryIcon"></div>
              <div><span>{{item.lotteryName}}</span></div>
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
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.all-lottery {
  .lottery-list {
    height: calc(100vh - 88px);
    overflow: scroll;
    dt {
      width: 100%;
      height: 60px;
      line-height: 60px;
      padding: 0 30px;
      font-size: 30px;
      color: #999;
      background-color: #eee;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 100vw;
      li {
        display: flex;
        flex-grow: 0;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: calc(750px / 3);
        height: 194px;
        font-size: 24px;
        color: #757575;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
      }
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
