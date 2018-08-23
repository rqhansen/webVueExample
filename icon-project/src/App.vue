<template>
  <div id="app">
    <img src="./assets/logo.png">
    <img src="./assets/aa.jpg" alt="">
     <div class="icon-wrap">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-left"></use>
      </svg>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
/*
*使用less需要安装less,less-loader
*/
// @import '../static/flex/fontSize.less';//字体适配
#app {
  position:relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .px2px(font-size, 32);//字体适配
}
//通用icon样式
.icon {
   width: 1em;
   height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
.icon-wrap{
    color:@primary-color;
}
</style>
