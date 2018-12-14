<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// @import "./assets/scss/reset.scss";
// @import "./assets/scss/fontSize.scss";
.clearfix {
  *zoom: 1;
  &:after {
    display: block;
    content: "";
    clear: both;
    height: 0;
  }
}
</style>
