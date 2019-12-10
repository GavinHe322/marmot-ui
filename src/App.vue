<template>
  <div>
    <router-view></router-view>
    <p>111</p>
    <hahaha />
    <hahaha2 />

  </div>
</template>

<script>

import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import 'highlight.js/styles/github.css';

import hahaha from "./a.md";
import hahaha2 from "./a.md";

export default {
  components: {
    hahaha,
    hahaha2,
  },
  mounted() {
    document.querySelectorAll('.language-js').forEach(block => {
      hljs.highlightBlock(block);
    })
  }
};
</script>

<style lang="less" scoped>
p {
  color: red;
}
</style>