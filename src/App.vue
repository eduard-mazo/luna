<template lang="pug">
  #app
    Header(:isLog="isLog")
    router-view
</template>

<script>
import Header from "@/components/layout/Header";
import { refdB } from "./firebase";
import firebase from "firebase";

export default {
  data() {
    return {
      isLog: false
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(`Active user: ${user.displayName}`);
        console.log(`User iud: ${user.uid}`);
        this.isLog = true;
      } else {
        console.log("No active session");
        this.isLog = false;
        sessionStorage.removeItem("token");
      }
    });
  },
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
