<template>
  <div>
    <router-link to="/backTop">backTop</router-link>
    <router-link to="/button">button</router-link>

    <router-view></router-view>
    <iframe :src="'mobile.html'" frameborder="0"></iframe>
  </div>
</template>

<script>
import docConfig from "../doc.config.js";

export default {
  name: "desktop",
  data() {
    return {
      docConfig
    };
  },
  computed: {
    mobileUrl() {
      return location.hash;
    }
  }
};
</script>

<style lang="less">
</style>