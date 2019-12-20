<template>
  <div class="desk-nav">
    <div 
      v-for="(val1, i1) in data" 
      :key="i1"
    >
      <div class="title">
        <a>
          {{ val1.name }}
        </a>
      </div>
      <div 
        v-for="(val2, i2) in val1.groups" 
        :key="i2"
      >
        <div class="sub-title">
          <a  v-if="val2.groupsName">
            {{ val2.groupsName }}
          </a>
        </div>
        <div 
          v-for="(val3, i3) in val2.list" 
          :key="i3"
        >
          <router-link 
            :to="val3.path" 
            class="a"
          >
            {{ val3.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      default: () => [],
      required: true
    }
  }
};
</script>

<style scoped>
.desk-nav {
  width: 220px;
  background: #fff;
  height: 100vh;
  overflow: auto;
  position: fixed;
  top: 60px;
  padding: 20px 10px 10px 30px;
  box-sizing: border-box;
}

.title {
  font-weight: bold;
  font-size: 1rem;
}

a {
  color: #5c7a88;
  display: block;
  padding: 10px 0;
  font-size: 14px;
  line-height: 24px;
}

.title a, .sub-title a {
  font-size: 1rem;
  color: #455a64;
}

.sub-title a {
  font-size: 12px;
  color: rgba(69,90,100,.6);
}

.pb-1 {
  padding-bottom: 1rem;
}

</style>