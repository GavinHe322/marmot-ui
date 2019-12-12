<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import 'highlight.js/styles/github.css';

export default {
  name: 'App',
};
</script>

<style lang="less" scoped>

</style>
