<template>
  <div class="prize-detail-header">
    <vux-header @click-left="$router.go(-1)"
                @click-right="goPath"
                :hasBack="true">
      <span slot="center">开奖详情</span>
      <span slot="right">号码走势</span>
    </vux-header>
  </div>
</template>

<script>
export default {
  methods: {
    goPath () {
      this.$router.push({ name: 'trend' });
    }
  }
}
</script>

<style lang="scss" scoped>
.prize-detail-header {
  /deep/ .header-right {
    font-size: 30px;
  }
}
</style>
