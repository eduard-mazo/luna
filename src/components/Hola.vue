<template lang="pug">
h1 HOLA EDUARD 
    .container
        img(src="@/assets/em.jpg")
        router-link(:to="{name: 'HelloWorld'}") PREVIOUS
    
</template>
<style lang="scss" scope>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>