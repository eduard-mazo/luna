<template lang="pug">
.container
  .container
    h1.title HOLA
    p {{msg}}
    router-link(:to="{name: 'login'}") Next Page

  
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h2 {
  text-shadow: 4px 4px 4px #aaa;
  color: #2c3e50;
}
</style>
