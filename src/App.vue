<template lang="pug">
  #app
    Header
    router-view
</template>

<script>
import Header from "@/components/layout/Header";

export default {
  components: {
    Header
  },
  name: "App"
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
