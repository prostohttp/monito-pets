import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/router";
import { clickOutside } from "@/includes/includes";
import "!/style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive("click-outside", clickOutside);

app.mount("#app");
