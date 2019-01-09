<template>
  <div class="rq-home-header">
    <vux-header :hasBack="false"
                :leftUrl="!user.userName?'login':''"
                :rightUrl="!user.userName?'register':''">
      <span slot="left"
            v-if="!user">登录</span>
      <img slot="center"
           src="../../assets/img/logo.png"
           height="72px" />
      <span slot="right">{{user.userName?`hi,${user.userName}`:'注册'}}</span>
    </vux-header>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    clicak () {
      console.log(this.user);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
