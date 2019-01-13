<template>
  <div class="prize-content">
    <ul>
      <li v-for="(item,idx) of prizeList"
          :key="idx"
          class="prize-item">
        <div class="left">

        </div>
        <div class="right">

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["prizeList"]
}
</script>

<style lang="scss" scoped>
.prize-content {
  // display: flex;
  height: 100px;
  .prize-item {
  }
}
</style>
