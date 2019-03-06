<template>
  <span
    class="iconfont"
    :class="type"
    :style="{ color: color, 'font-size': fontSize }"
    @click="iconClick"
  ></span>
</template>

<script>
export default {
  props: {
    /**
     * 图标类型
     */
    type: String,

    /**
     * 图标颜色
     */
    color: String,

    /**
     * 图标大小
     */
    size: String
  },
  computed: {
    fontSize() {
      return `${this.size}px`;
    }
  },
  methods: {
    iconClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="less" scoped></style>
