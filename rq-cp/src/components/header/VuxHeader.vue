<template>
  <div class="rq-header-tool">
    <!-- 左边 -->
    <div class="header-left"
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
    leftUrl: {
      type: String,
      default: ''
    },
    rightUrl: {
      type: String,
      default: ''
    }
  },
  methods: {
    leftClick () { //点击左侧
      if (!this.hasBack) {
        if (this.leftUrl) {
          this.$router.push({ name: this.leftUrl });
        }
        return
      }
      this.$router.go(-1);
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
  display: flex;
  width: 750px;
  height: 88px;
  padding: 0 25px;
  background-color: #ec0022;
  color: #fff;
  overflow: hidden;
  font-size: 38px;
  .header-left {
    margin: auto;
  }
  .header-center {
    @extend .header-left;
    flex: 1;
    text-align: center;
  }
  .header-right {
    @extend .header-left;
  }
}
</style>
