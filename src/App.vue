<template>
  <div id="app">
    <router-view />
    <tab></tab>
  </div>
</template>

<script>
import tab from "@/components/tab.vue";
export default {
  data() {
    return {};
  },
  components: {
    tab
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
