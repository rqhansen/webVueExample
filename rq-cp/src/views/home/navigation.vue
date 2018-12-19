<template>
  <div class="rq-home-navigation">
    <ul>
      <li v-for="item of navList"
          :key="item.title">
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
  data () {
    return {
      navList: [
        {
          title: "充值存款",
          imgUrl: '/img/home/navigate-1.png'
        },
        {
          title: "聊天室",
          imgUrl: '/img/home/navigate-2.png'
        },
        {
          title: "优惠活动",
          imgUrl: '/img/home/navigate-3.png'
        },
        {
          title: "在线客服",
          imgUrl: '/img/home/navigate-4.png'
        },
      ]
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
