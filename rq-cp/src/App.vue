<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
.clearfix {
  *zoom: 1;
  &:after {
    display: block;
    content: "";
    clear: both;
    height: 0;
  }
}
.icon {
  height: 1rem;
  width: 1rem;
  vertical-align: -0.15rem;
  fill: currentColor;
  overflow: hidden;
}
</style>
