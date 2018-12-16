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
</style>
