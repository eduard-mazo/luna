import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Hola from "@/components/Hola";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/",
      name: "hola",
      component: Hola
    }
  ],
  mode: "history"
});
