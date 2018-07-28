<template lang="pug">
  #app
    Header
    router-view
</template>

<script>
import Header from "@/components/layout/Header";
import { refdB } from "./firebase";

export default {
  components: {
    Header
  },
  firebase: {
    refdB
  },
  name: "App"
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
