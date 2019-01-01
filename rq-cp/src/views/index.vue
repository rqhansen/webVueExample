<template>
  <div class="wrapper">
    <router-view />
    <!-- 页脚 -->
    <footer class="rq-footer">
      <ol>
        <li v-for="(item,index) of iconList"
            :key="index"
            :class="{'active':index===idx}"
            @click="goPath(item.url,index)">
          <div>
            <svg-icon :icon-class="item.name"></svg-icon>
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
export default {
  name: "home",
  data () {
    return {
      idx: 0,
      iconList: [
        {
          name: "home",
          title: "首页",
          url: '/home'
        },
        {
          name: "car",
          title: "购彩",
          url: '/home'
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
  methods: {
    goPath (url, index) {
      if (this.idx === index) return;
      this.idx = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
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
        .svg-icon {
          color: #ec0022;
        }
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
