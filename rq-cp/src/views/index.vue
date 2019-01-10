<template>
  <div class="wrapper">
    <keep-alive :include="['home']">
      <router-view v-transition
                   class="rq-child-view"></router-view>
    </keep-alive>
    <!-- 页脚 -->
    <footer class="rq-footer"
            v-if="hasFooter">
      <ol>
        <li v-for="(item,index) of iconList"
            :key="index"
            :class="{'active':index===idx}"
            @click="goPath(item.url,index)">
          <div>
            <svg-icon :icon-class="index===idx?`${item.name}-active`:item.name"></svg-icon>
          </div>
          <div>
            <span>{{item.title}}</span>
          </div>
        </li>
      </ol>
    </footer>
  </div>
</template>

<script>
// import { mapMutations, mapGetters } from 'vuex'
export default {
  name: "home",
  data () {
    return {
      idx: 0,
      hasFooter: true,
      iconList: [
        {
          name: "home",
          title: "首页",
          url: '/home'
        },
        {
          name: "car",
          title: "购彩",
          url: '/lottery'
        },
        {
          name: "award",
          title: "开奖",
          url: '/home'
        },
        {
          name: "lottery",
          title: "走势",
          url: '/home'
        },
        {
          name: "my",
          title: "我的",
          url: '/home'
        }
      ]
    }
  },
  watch: {
    $route (to) {
      this.handlerFooter()
    }
  },
  // computed: {
  //   ...mapGetters(['pagePos'])
  // },
  methods: {
    handlerFooter () {
      let { meta: { hasFooter } } = this.$route;
      this.hasFooter = hasFooter;
    },
    goPath (url, index) {
      if (this.idx === index) return;
      this.idx = index;
      this.$router.push({ name: 'lottery' });
    }
  },
  created () {
    this.handlerFooter();
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  .rq-child-view {
    min-height: 100vh;
    height: 100vh;
    background-color: #fff;
  }
  .rq-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 999; //可防止抖动
    background-color: #eee;
  }
  ol {
    display: flex;
    align-items: center;
    flex-direction: flex-start;
    width: 100%;
    height: 96px;
    li {
      flex: 1;
      font-size: 24px;
      color: #757575;
      text-align: center;
      &.active {
        color: #ec0022;
      }
      .svg-icon {
        position: relative;
        top: 6px;
        font-size: 40px;
        margin-bottom: 2px;
      }
    }
  }
}
</style>
