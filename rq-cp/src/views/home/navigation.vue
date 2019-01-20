<template>
  <div class="rq-home-navigation">
    <ul>
      <li v-for="item of fastMenus"
          :key="item.title"
          class="touch-feedback"
          v-feedBackClick="goPath">
        <div><img :src="item.imgUrl"
               alt=""></div>
        <div>
          <span>{{item.title}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navigation",
  props: ['fastMenus'],
  data () {
    return {
      navList: []
    }
  },
  methods: {
    goPath () {
      console.log(1);
    }
  }
}
</script>

<style lang="scss" scoped>
.rq-home-navigation {
  padding: 16px 0;
  ul {
    display: flex;
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      font-size: 24px;
    }
    img {
      width: 76px;
      height: 76px;
    }
  }
}
</style>
