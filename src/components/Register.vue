<template lang="pug">
.container
  .container
    button(@click="register") hola

  
</template>

<script>
import authService from "@/services/authService";

export default {
  data() {
    return {
      email: "eduard.mazo@gmail.com",
      pass: "123456"
    };
  },
  methods: {
    async register() {
     const response = await authService.register({
        email: this.email,
        pass: this.pass
      });
      console.log(response.data);
      
    }
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
