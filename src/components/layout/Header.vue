<template lang="pug">
.navbar.is-success
    .navbar-brand
        img.navbar-item(src="@/assets/epm.png")
        span.navbar-burger(@click="menu", 
        :class="[!isPublished ? 'is-active' : '']")
            span
            span
            span
    .navbar-menu(:class="[!isPublished ? 'is-active' : '']")
        .navbar-start
            a.navbar-item hola
            a.navbar-item hola
            a.navbar-item hola
        .navbar-end
            a.navbar-item {{msg}} 2
            a.navbar-item {{msg}}




</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "Vue.js",
      isPublished: true
    };
  },
  methods: {
    doIt() {
      console.log("hola");
    },
    menu() {
      this.isPublished = !this.isPublished;
    }
  }
};
</script>

<style lang="scss" scope>
</style>