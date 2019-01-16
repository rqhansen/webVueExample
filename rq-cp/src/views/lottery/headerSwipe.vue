<template>
  <div class="lottery-swipe-header">
    <dl class="lottery-types">
      <dt :class="{'active':currIndex===-1}"
          @click="clickItem({code:'all'},-1)">全部彩种</dt>
      <dd class="swiper-container">
        <swiper :options="swiperOption"
                ref="mySwiper">
          <swiper-slide v-for="(item,idx) of lotteryTypes"
                        @click.native="clickItem(item,idx)"
                        :class="{'active':currIndex===idx}"
                        :key="idx">{{item.lotteryTypeName}}</swiper-slide>

        </swiper>
      </dd>
    </dl>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: ['lotteryTypes'],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      currIndex: -1,
      swiperOption: {
        slidesPerView: '3',
        notNextTick: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    clickItem (item, idx) {
      if (this.currIndex !== idx) {
        this.$emit('choice-type', item.code);
      }
      if (idx > this.currIndex && idx !== 0) {
        this.swiper.slideNext();
      } else {
        this.swiper.slidePrev();
      }
      this.currIndex = idx;
    }
  }
}
</script>

<style lang="scss" scoped>
.lottery-swipe-header {
  .lottery-types {
    display: flex;
    align-items: center;
    font-size: 30px;
    color: hsla(0, 0%, 100%, 0.85);
    dt {
      position: relative;
      width: 188px;
      height: 66px;
      line-height: 66px;
      text-align: center;
      box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.16);
      &.active {
        color: #fff;
        font-weight: 700;
        &:after {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: block;
          content: "";
          width: 50px;
          height: 3px;
          background-color: #fff;
        }
      }
    }
    dd {
      flex: 1;
      /deep/ .swiper-slide {
        @extend dt;
        box-shadow: none;
      }
    }
  }
}
</style>
