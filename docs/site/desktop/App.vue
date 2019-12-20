<template>
  <div class="container">
    <Header :data="docConfig" />
    <div class="container-content">
      <Nav :data="docConfig.nav" />
      <div class="content">
        <router-view class="content-view" />
      </div>
      <iframe
        class="iframe"
        :src="'mobile.html'"
        frameborder="0"
      />
    </div>
  </div>
</template>

<script>
import docConfig from "../doc.config.js";
import Header from "../../components/Header.vue";
import Nav from "../../components/Nav.vue";

export default {
  name: "Desktop",
  components: {
    Header,
    Nav,
  },
  data() {
    return {
      docConfig,
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
  width: 750px;
  box-sizing: border-box;
}

.content-view {
  padding: 20px 30px 0;
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