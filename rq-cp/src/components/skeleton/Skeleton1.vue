<template>
  <div class="home-skele-wrap">
    <header>
      <div v-for="n of 3"
           :key="n"></div>
    </header>
    <section class="banner"></section>
    <section class="announce">
      <p></p>
    </section>
    <nav>
      <ul>
        <li v-for="n of 4"
            :key="n">
          <div></div>
        </li>
      </ul>
    </nav>
    <hr />
    <section class="hot">
      <h2></h2>
      <div>
        <ul>
          <li v-for="n of 12"
              :key="n">
            <dl>
              <dt></dt>
              <dd>
                <p></p>
                <p></p>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </section>
    <section class="rank">
      <h2></h2>
      <div>
        <ul>
          <li v-for="n of 10"
              :key="n">
            <span v-for="m of 3"
                  :key="m"></span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'skeleton'
}
</script>

<style lang="scss" scoped>
@keyframes shine {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 1580px 0;
  }
}
@mixin skele-bg($w, $h, $bg) {
  width: $w;
  height: $h;
  background: linear-gradient(to right, #ececf0 8%, #d3d3d9 18%, #ececf0 33%);
  background-size: $bg $h;
  animation: shine 0.8s linear infinite;
}
.home-skele-wrap {
  width: 100%;
  -webkit-oveflow-scrolling: touch;
  header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 88px;
    padding: 0 20px;
    background-repeat: no-repeat;
    background-position: center;
    div {
      @include skele-bg(64px, 48px, 2000px);
      &:nth-child(2) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        @include skele-bg(184px, 65px, 2000px);
      }
    }
  }
  .banner {
    @include skele-bg(100, 220px, 5000px);
  }
  .announce {
    height: 64px;
    padding: 10px 10px 10px 80px;
    p {
      @include skele-bg(100%, 100%, 5000px);
    }
  }
  nav {
    height: 144px;
    ul {
      display: flex;
      align-items: center;
      li {
        flex: 1;
        text-align: center;
      }
      div {
        display: inline-block;
        @include skele-bg(96px, 112px, 5000px);
      }
    }
  }
  hr {
    height: 20px;
    background-color: #f3f3f3;
  }
  .hot {
    padding: 10px 0 0 20px;
    h2 {
      @include skele-bg(70px, 30px, 1000px);
    }
    ul {
      li {
        display: inline-block;
        width: 50%;
        height: 138px;
        padding: 20px 115px 20px 20px;
        dl {
          display: flex;
          height: 96px;
        }
        dt {
          @include skele-bg(96px, 96px, 3200px);
        }
        dd {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 20px;
        }
        p {
          @include skele-bg(160px, 48px, 2000px);
          &:last-child {
            @include skele-bg(160px, 32px, 2000px);
          }
        }
      }
    }
  }
  .rank {
    h2 {
      @include skele-bg(70px, 30px, 1000px);
      margin-left: 20px;
    }
    li {
      width: 100%;
      height: 30px;
      margin: 10px 20px;
      font-size: 0;
      span {
        display: inline-block;
        @include skele-bg(140px, 30px, 2000px);
        &:first-child {
          margin-left: 30px;
        }
        &:nth-child(2) {
          @include skele-bg(160px, 30px, 2000px);
          margin-left: 90px;
        }
        &:last-child {
          @include skele-bg(180px, 30px, 2000px);
          margin-left: 100px;
        }
      }
    }
  }
}
</style>
