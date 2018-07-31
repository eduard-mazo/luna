// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
var VueFire = require("vuefire");
import "./firebase";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faLock,
  faCalendar,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faKeycdn,
  faMailchimp,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);

library.add(
  faEnvelope,
  faLock,
  faKeycdn,
  faCalendar,
  faMailchimp,
  faGithub,
  faSignInAlt
);

// explicit installation required in module environments
Vue.use(VueFire);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
