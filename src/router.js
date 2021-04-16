import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Bet from "@/pages/Bet.vue";
import CVBuilder from "@/pages/CVBuilder.vue";

import template1 from "@/pages/subpages/template1.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/bet",
    name: "Bet",
    component: Bet,
   },
   {
    path: "/cv-builder",
    name: "CVBuilder",
    component: CVBuilder,
   },
    {
    path: "/cv/template1",
    name: "template1",
    component: template1,
   }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;