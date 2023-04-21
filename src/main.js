import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.scss";

window.API_URL =
  "https://nordbo-robotics-default-rtdb.europe-west1.firebasedatabase.app/";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
