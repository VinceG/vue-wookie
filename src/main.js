import "es6-promise/auto";
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";
import "./registerServiceWorker";
import serviceContainer from "./services/container";

Vue.config.productionTip = false;

import { sync } from "vuex-router-sync";
sync(store, router);

Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: h => h(App),
  provide: serviceContainer,
  metaInfo: {
    titleTemplate: chunk =>
      chunk ? `${chunk} | Wookie Movies` : "Wookie Movies"
  }
}).$mount("#app");
