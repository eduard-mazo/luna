<template lang="pug">
.navbar.is-success.is-fixed-top
    .navbar-brand
        img.navbar-item(src="@/assets/epm.png")
        span.navbar-burger(@click="menu", 
        :class="[!isPublished ? 'is-active' : '']")
            span
            span
            span
    .navbar-menu(:class="[!isPublished ? 'is-active' : '']")
        .navbar-start(v-if="isLog")
            a.navbar-item 
              router-link(:to="{name: 'table'}") table
            a.navbar-item hola
            a.navbar-item hola
        .navbar-end(v-if="!isLog")
            router-link.navbar-item(:to="{name: 'login'}")
              span.icon
                font-awesome-icon(icon="sign-in-alt")
              span {{msg}}
        .navbar-end(v-if="isLog")
            a.navbar-item(@click="logOut")
              span.icon
                font-awesome-icon(icon="sign-in-alt")
              span {{msg2}}





</template>

<script>
import firebase from "firebase";

export default {
  name: "Header",
  data() {
    return {
      msg: "Log-in",
      msg2: "Log-out",
      isPublished: true
    };
  },
  props: {
    isLog: Boolean
  },
  methods: {
    doIt() {
      console.log("hola");
    },
    menu() {
      this.isPublished = !this.isPublished;
    },
    logOut() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style lang="scss" scope>
</style>