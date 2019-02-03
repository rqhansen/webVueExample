<template>
  <div class="trend-header">
    <vux-header :hasBack="false"
                v-on="$listeners">
      <div slot="left">
        <img src="../../assets/img/logo.png"
             height="72px" />
      </div>
      <div slot="center">
        <span>北京PK10</span>
        <svg-icon icon-class="up-triangle"></svg-icon>
      </div>
    </vux-header>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.trend-header {
  .svg-icon {
    transform: rotate(180deg);
  }
}
</style>
