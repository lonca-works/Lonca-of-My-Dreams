import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
require("@/assets/main.scss");

const app = createApp(App);

app.use(router);

app.mount("#app");
