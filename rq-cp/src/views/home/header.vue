<template>
  <div class="rq-home-header">
    <vux-header :hasBack="false"
                @click-left="clickLeft"
                @click-right="clickRight">
      <span slot="left"
            v-if="!user.userName">登录</span>
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
  name: 'homeHeader',
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    clickLeft () {
      this.$router.push({ name: 'login' });
    },
    clickRight () {
      !this.user.userName && this.$router.push({ name: 'register' });
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
