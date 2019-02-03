<template>
  <div class="trend-tabs">
    <ul>
      <li v-for="(itm,idx) of typeTabs"
          :key="idx"
          :class="{'active':tabIndex===idx}"
          @click="switchTab(itm,idx)">
        {{itm.displayName}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['typeTabs'],
  data () {
    return {
      tabIndex: ''
    }
  },
  watch: {
    typeTabs (newVal) {
      this.tabIndex = newVal.findIndex(item => item.defaultItem === 1);
    }
  },
  methods: {
    switchTab (itm, idx) { //切换tab
      if (this.tabIndex === idx) return;
      this.tabIndex = idx;
    }
  }
}
</script>

<style lang="scss" scoped>
.trend-tabs {
  ul {
    display: flex;
    border-bottom: 1px solid #e6e6e6;
  }
  li {
    flex: 1;
    text-align: center;
    font-size: 28px;
    line-height: 80px;
    &.active {
      color: #ec0022;
      border-bottom: 1px solid #ec0022;
    }
  }
}
</style>
