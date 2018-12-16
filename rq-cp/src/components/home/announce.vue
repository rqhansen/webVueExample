<template>
  <div class="rq-home-announce">
    <dl>
      <dt>公告</dt>
      <dd>
        <marquee scrolldelay="100">我已经老了，有一天，在一处公共场所的大厅里，有一个男人向我走来。他主动介绍自己，他对我说：“我认识你，永远记得你。那时候，你还很年轻，人人都说你美。现在，我是特为来告诉你，对我来说，我觉得现在你比年轻的时候更美，那时你是年轻女人，与你那时的面貌相比，我更爱你现在备受摧残的面容。</marquee>
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
