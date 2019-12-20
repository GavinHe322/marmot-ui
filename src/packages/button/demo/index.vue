<template>
  <div>
    <Button :text="'你好'" />
  </div>
</template>

<script>
import Button from "../index.tsx";

export default {
  name: "ButtonDemo",
  components: {
    Button,
  },
  data() {
    return {
    };
  },
}
</script>