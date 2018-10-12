
<template>
  <div class="wrap">
    <div class="home">我是内容</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@rem:75rem;
.wrap {
    width: 40/@rem;
    height: 60px;
    line-height: 60px;
    border: 1px solid red;
    border-radius: 12PX;
    margin: 50px auto;
    .px2px(font-size,22PX);/*PX大写不转为rem*/
}
</style>

