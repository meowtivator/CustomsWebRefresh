import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/input.css";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App);
app.component("Header", Header);
app.component("Footer", Footer);
app.use(router);
app.mount("#app");
