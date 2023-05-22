import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// css
import "./assets/css/index.css";
import "./assets/css/fonts.css";

// main app
import App from "./App.vue";

// views
import Home from "./views/Home.vue";
import MobileApp from "./views/MobileApp.vue";
import Appliances from "./views/Appliances.vue";
import RecipesView from "./views/RecipesView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/mobile-app", component: MobileApp },
    { path: "/appliances", component: Appliances },
    { path: "/recipes", component: RecipesView },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
});

const app = createApp(App);

app.use(router);

app.mount("#app");
