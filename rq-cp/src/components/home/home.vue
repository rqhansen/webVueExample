<template>
  <div class="rq-home">
    <!-- 页头 -->
    <header>
      <top></top>
    </header>
    <!-- 轮播 -->
    <section>
      <banner></banner>
    </section>
    <!-- 公告 -->
    <article>
      <announce></announce>
    </article>
    <!--导航菜单-->
    <section>
      <navigation></navigation>
    </section>
    <!--分割区 -->
    <hr />
  </div>
</template>

<script>
import top from './header';
import banner from './banner';
import announce from './announce';
import navigation from './navigation';
export default {
  name: "home",
  components: {
    top,
    banner,
    announce,
    navigation
  },
  data () {
    return {
    }
  }
};
</script>
 
<style lang="scss" scoped>
.rq-home {
  hr {
    width: 750px;
    height: 20px;
    background-color: #f3f3f3;
  }
}
</style>
