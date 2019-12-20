<template>
  <div class="header">
    <input type="text" class="doc-input" placeholder="搜索文档...">
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {

  },
}
</script>

<style scoped>
.header {
  height: 60px;
  min-height: 60px;
  background: #001938;
  padding: 0 40px;
}

.doc-input {
  height: 60px;
  width: 200px;
  border: none;
  color: #fff;
  background: transparent;
}

.doc-input:focus {
  outline: none;
}

</style>
