<template>
  <div class="rq-header-tool">
    <!-- 左边 -->
    <div class="header-left left"
         @click.stop="leftClick">
      <slot name="left"
            v-if="!hasBack"></slot>
      <svg-icon icon-class="back"
                v-else></svg-icon>
    </div>
    <!-- 中间 -->
    <div class="header-center">
      <slot name="center"></slot>
    </div>
    <!-- 右边 -->
    <div class="header-right"
         @click.stop="rightClick">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hasBack: { //是否有后退箭头
      type: Boolean,
      default: true
    },
    leftUrl: { //左侧链接
      type: String,
      default: ''
    },
    rightUrl: { //右侧链接
      type: String,
      default: ''
    },
    scrollEle: { //需要滚动到顶部的元素
      type: String,
      default: ''
    }
  },
  methods: {
    leftClick () { //点击左侧
      if (!this.hasBack) { //非后退，跳转到其它链接
        if (this.leftUrl) {
          // if (this.scrollEle && this.scrollEle.scrollTop) { //将当前页的滚动元素恢复到初始位置
          //   this.scrollEle.scrollTop = 0;
          // }
          this.$router.push({ name: this.leftUrl });
        }
        return
      }
      this.$router.go(-1); //后退
    },
    rightClick () { //点击右侧
      if (!this.rightUrl) return
      this.$router.push({ name: this.rightUrl })
    }
  }
}
</script>

<style lang="scss" scoped>
.rq-header-tool {
  position: relative;
  width: 750px;
  height: 88px;
  line-height: 88px;
  padding: 0 25px;
  background-color: #ec0022;
  color: #fff;
  overflow: hidden;
  font-size: 36px;
  .header-left {
    position: absolute;
    top: 0;
    height: 100%;
  }
  .left {
    left: 25px;
    @extend .header-left;
  }
  .header-center {
    width: 100%;
    text-align: center;
  }
  .header-right {
    @extend .header-left;
    right: 25px;
  }
}
</style>
