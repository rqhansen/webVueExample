<template>
  <div class="flex-layout-wrapper"
       :class="wrapClass">
    <dl>
      <dt>
        <slot name="title"></slot>
        <slot name="content"></slot>
      </dt>
      <dd>
        <slot name="top"></slot>
        <slot name="center"></slot>
        <slot name="bottom"></slot>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ['wrapClass']
}
</script>

<style lang="scss" scoped>
.flex-layout-wrapper {
  width: 100%;
  height: 100%;
  dl {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    dt {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-wrap: nowrap;
    }
    dd {
      @extend dt;
    }
  }
}
</style>
