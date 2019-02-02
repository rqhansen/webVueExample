<template>
  <section class="lottery-plays-wrapper">
    <div class="lottery-plays">
      <!-- 一级菜单列表 -->
      <div class="a-menu-wrapper">
        <ul class="a-menu">
          <li v-for="(item,idx) of lotteryPlayList"
              :key="item.lotteryPlayId"
              :class="{'active':menuPlayId===item.lotteryPlayId}"
              @click="changeTopPlay(item,idx)">{{item.playName}}</li>
        </ul>
      </div>
      <!-- 二三级菜单列表 -->
      <div class="sub-menu"
           v-if="playMenu&&playMenu.length">
        <dl v-for="item of playMenu"
            :key="item.lotteryPlayId">
          <dt>{{item.playName}}</dt>
          <dd>
            <ul class="a-menu">
              <li v-for="(play,idx) of item.lotteryPlayList"
                  :key="play.lotteryPlayId"
                  :class="{'active':play.lotteryPlayId===lotteryPlayId}"
                  @click="changePlay(play,idx)">{{play.playName}}</li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['lotteryPlayList', 'defaultPlayId', 'subMenu', 'parentPlayId'],
  data () {
    return {
      menuPlayId: '',//一级玩法Id
      lotteryPlayId: '', //玩法Id
      playMenu: [] //二三级玩法列表
    }
  },
  watch: {
    defaultPlayId (newVal, oldVal) { //三级菜单Id
      this.lotteryPlayId = newVal
    },
    parentPlayId (newId) { //一级菜单Id
      this.menuPlayId = newId;
    },
    subMenu (newVal) { //二三级菜单
      this.playMenu = newVal;
    }
  },
  methods: {
    /**
     * 切换一级菜单
     */
    changeTopPlay (item, idx) {
      if (this.menuPlayId === item.lotteryPlayId) return
      // this.menuPlayId = item.lotteryPlayId
      this.playMenu = item.lotteryPlayList;
      if (!this.playMenu) {//pcdd没有二级菜单lotteryPlayList，改变投注内容
        this.$emit('change-play', item);
      }
      this.$emit('set-parent-play-id', item.lotteryPlayId);
    },
    /**
     * 切换玩法
     */
    changePlay (play, idx) {
      if (this.lotteryPlayId === play.lotteryPlayId) return
      this.lotteryPlayId = play.lotteryPlayId;
      this.$emit('change-play', play);
    }
  }
}
</script>

<style lang="scss" scoped>
.lottery-plays-wrapper {
  height: 100%;
  background-color: rgba(3, 3, 3, 0.31);
  .lottery-plays {
    background-color: #fff;
    overflow: scroll;
    .a-menu-wrapper {
      border-bottom: 1px solid #eee;
      @import "./common.scss";
    }
  }
  .sub-menu {
    padding: 0 0 15px 15px;
    font-size: 30px;
    dl {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
    }
    dt {
      width: calc(675px / 4);
      height: 44px;
      margin-top: 15px;
      color: #000;
      text-align: center;
    }
    dd {
      flex: 1;
      @import "./common.scss";
      .a-menu {
        padding-bottom: 0;
        li {
          height: 44px;
          line-height: 44px;
        }
      }
    }
  }
}
</style>
