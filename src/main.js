import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import "./assets/main.scss";
import en from "../locales/en";
import da from "../locales/da";

window.API_URL =
  "https://nordbo-robotics-default-rtdb.europe-west1.firebasedatabase.app/";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages: {
    en: en,
    da: da,
  },
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
