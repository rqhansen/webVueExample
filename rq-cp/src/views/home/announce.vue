<template>
  <div class="rq-home-announce">
    <dl>
      <dt>公告</dt>
      <dd>
        <marquee scrolldelay="80">就当我俩没有明天,就当我俩只剩眼前，就当我都不曾离开,还能占满你心怀。你的眼中充满期待,我的心中尽是未来,空气之中弥漫着恋和爱，发现感觉已经不在,默默的你却不肯说,只是低头寻找一种解脱。</marquee>
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
