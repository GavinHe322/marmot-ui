<template>
  <div>
    <router-view></router-view>
    <p>111</p>
    <hahaha />
  </div>
</template>

<script>
import hahaha from "./a.md";

export default {
  components: {
    hahaha,
  }
};
</script>

<style lang="less" scoped>
p {
  color: red;
}
</style>