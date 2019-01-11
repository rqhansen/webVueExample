<template>
  <div class="rq-lottery-header">
    <!-- 头部 -->
    <vux-header :hasBack="false">
      <span slot="center">彩票</span>
      <span slot="right">所有彩票</span>
    </vux-header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.rq-lottery-header {
  /deep/ .header-center {
    text-align: center;
    span {
      display: inline-block;
      width: 136px;
      height: 56px;
      line-height: 56px;
      color: #ec0022;
      background-color: #fff;
      border-radius: 12px;
    }
  }
  /deep/ .header-right {
    font-size: 30px;
  }
}
</style>
