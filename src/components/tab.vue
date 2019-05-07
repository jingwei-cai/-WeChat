<template>
  <div class="tab">
    <div class="t-wrap">
      <div
        class="t-w-item"
        :class="{ active: index === i }"
        v-for="(item, i) in list"
        :key="i"
        @click="change(i)"
      >
        <router-link :to="item.url">
          <div class="t-w-i-top">
            <!-- icon-tips-xiaoxi -->
            <Icon :type="item.icon" />
          </div>
          <p>{{ item.text }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          icon: "icon-wechat",
          text: "聊天",
          url: "liaotian"
        },
        {
          icon: "icon-contact",
          text: "通讯录",
          url: "contact"
        },
        {
          icon: "icon-find",
          text: "发现",
          url: "find"
        },
        {
          icon: "icon-me",
          text: "我的",
          url: "my"
        }
      ],
      index: 0
    };
  },
  methods: {
    change(i) {
      this.index = i;
    }
  }
};
</script>

<style lang="less" scoped>
.tab {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f7f7f7;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    border-top: 1px solid #f1f1f1;
    height: 100%;
    transform-origin: left top;
    transform: scale(0.5);
    pointer-events: none; /* 防止点击触发 */
    box-sizing: border-box;
    @media screen and (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3) {
      height: 100%;
      transform: scale(0.33);
    }
  }
  .t-wrap {
    display: flex;
    justify-content: space-around;
    .t-w-item {
      padding: 0.2rem 0;
      font-size: 1.2rem;
      .t-w-i-top {
        .iconfont {
          font-size: 2.4rem;
        }
      }
    }
    .t-w-item.active {
      color: #0ac260;
      .iconfont {
        color: #0ac260;
      }
    }
  }
}
</style>
