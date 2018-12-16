<template>
  <div class="wrapper">
    <router-view />
    <!-- 页脚 -->
    <footer class="rq-footer">我是页脚</footer>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-bottom: 96px;
  .rq-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 96px;
  }
}
</style>
