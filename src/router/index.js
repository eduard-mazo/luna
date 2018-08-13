import Vue from "vue";
import Router from "vue-router";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Home from "@/components/Home";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { isPublic: true }
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: Register
  }
];
Vue.use(Router);

const isAuth = () => {
  return window.sessionStorage.token;
};

const router = new Router({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !isAuth()) {
    return next("/login");
  }
  if (to.name === "login" && isAuth()) {
    return next("/");
  }
  return next();
});
export default router;
// export default new Router({
//   routes: [
//     {
//       path: "/login",
//       name: "login",
//       component: Login,
//       meta: { isPublic: true }
//     },
//     {
//       path: "/",
//       name: "home",
//       component: Home
//     },
//     {
//       path: "/table",
//       name: "table",
//       component: Table
//     }
//   ],
//   mode: "history"
// });
