import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import InstantSearch from "vue-instantsearch/vue3/es";

createApp(App).use(InstantSearch).mount("#app");
// createApp(App).mount("#app");
