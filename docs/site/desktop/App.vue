<template>
  <div class="container">
    <Header :data="docConfig"/>
    <div class="container-content">
      <Nav :data="docConfig.nav"/>
      <router-view class="content"></router-view>
      <iframe class="iframe" :src="'mobile.html'" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import docConfig from "../doc.config.js";
import Header from '../../components/Header.vue';
import Nav from '../../components/Nav.vue';
console.log(docConfig.nav)

export default {
  name: "desktop",
  components: {
    Header,
    Nav,
  },
  data() {
    return {
      docConfig
    };
  },
};
</script>

<style lang="less">
.container-content {
  position: relative;
}

.content {
  margin: 0 auto;
  width: 800px;
  box-sizing: border-box;
}

.iframe {
  position: absolute;
  right: 0;
  background: #f8f8f8;
  width: 320px;
  height: 640px;
  border-radius: 4px;
}

@media (min-width: 1680px) {
  .container, .content {
    width: 1680px;
    margin: 0 auto;
  }

  .content {
    padding-left: 220px;
    padding-right: 390px;
  }
}



</style>