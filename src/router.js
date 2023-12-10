import { createRouter, createWebHistory } from "vue-router";
import Livescore from "./components/Livescore.vue";
import Updatescore from "./components/Updatescore.vue";

const routes = [
    { path: "/", component: Updatescore },
    { path: "/live", component: Livescore },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;