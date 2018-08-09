<template lang="pug">
.bg(id="bg-img")
    .container
        h1.title HOLA
        p {{msg}}
        router-link(:to="{name: 'login'}") login
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
.container {
  margin-top: 83px;
  z-index: 1;
}
</style>