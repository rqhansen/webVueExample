<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "../static/css/reset.scss";
@import "../static/css/fontSize.scss";
.clearfix {
  *zoom: 1;
  &:after {
    display: block;
    content: "";
    clear: both;
    height: 0;
  }
}
a {
  @include font-dpr(20);
}
</style>
