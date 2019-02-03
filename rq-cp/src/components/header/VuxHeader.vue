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
    <div class="header-center"
         @click.stop="centerClick">
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
    }
  },
  methods: {
    leftClick () {
      this.$emit("click-left");
    },
    centerClick () {
      this.$emit('click-center');
    },
    rightClick () { //点击右侧
      this.$emit("click-right")
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
