<template>
  <div class="rq-home-announce">
    <dl>
      <dt>公告</dt>
      <dd>
        <marquee scrolldelay="80">不愿意看到你朦胧泪眼,我就变成那晚风</marquee>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.rq-home-announce {
  font-size: 30px;
  padding: 0 10px;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  dl {
    display: flex;
    justify-content: flex-start;
    line-height: 64px;
  }
  dt {
    height: 64px;
    padding-right: 10px;
    color: #ec0022;
  }
  dd {
    flex: 1;
    height: 64px;
  }
}
</style>
