<template>
  <div flexcontainer>
    <div class="hello"
         aspectratio
         w-750-235
         aspect-ratio="750/235">
      <div aspectratio-content
           class="content">
        <div class="aa">我是内容</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="postcss" scoped>
[w-750-235] {
    width: 500px;
    height: 80px;
    line-height: 80px;
    margin: 0 auto;
    z-index: 5000;
}
[w-750-235] {
    aspect-ratio: '750:250';
}
@svg square {
    @rect {
        fill: var(--color, black);
        width: 100%;
        height: 100%;
        fill: none;
        stroke: var(--color, #ddd);
        stroke-width: 1px;
    }
}
.hello {
    font-size: 22px;
    background: white svg(square param(--color #00b1ff));
}
</style>
