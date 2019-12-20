<template>
  <div>
    mobole
     <router-link to="/backTop">backTop</router-link>
    <router-link to="/button">button</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import docConfig from "../doc.config.js";
window.console.log(docConfig);
export default {
  name: "mobile",
};
</script>