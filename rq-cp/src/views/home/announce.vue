<template>
  <div class="rq-home-announce">
    <dl>
      <dt>公告</dt>
      <dd>
        <marquee scrolldelay="100"
                 scrollamount="10">就当我俩没有明天,就当我俩只剩眼前，就当我都不曾离开,还能占满你心怀。你的眼中充满期待,我的心中尽是未来,空气之中弥漫着恋和爱，发现感觉已经不在,默默的你却不肯说,只是低头寻找一种解脱。眼前的你是我的最爱,我怎会不明白。失去的年代已经变成伤害,我也更加熟悉许多无奈,不愿意看到你朦胧泪眼,我就变成那晚风。</marquee>
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
