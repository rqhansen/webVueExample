<template>
  <div class="rq-prize">
    <header class="header">
      <top></top>
    </header>
    <section class="prize-wrapper">
      <div v-refresh="refresh">
        <prizeList></prizeList>
      </div>
    </section>
  </div>
</template>

<script>
import top from './header'
import prizeList from './prizeList'
export default {
  components: {
    top,
    prizeList
  },
  methods: {
    refresh () {
      console.log(1);
    }
  }
}
</script>

<style lang="scss" scoped>
.rq-prize {
  padding: 88px 0 96px 0;
  .header {
    position: fixed;
    top: 0;
    left: 0;
  }
  .prize-wrapper {
    height: calc(100vh - 184px);
    overflow: scroll;
  }
}
</style>
