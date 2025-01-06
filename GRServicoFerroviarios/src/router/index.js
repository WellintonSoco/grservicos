import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: () => import("@/components/HomeView.vue"),
    },
    {
      path: "/projects",
      name: "Projetos",
      component: () => import("@/components/ProjectsView.vue"),
    },
    {
      path: "/contacts",
      name: "Contatos",
      component: () => import("@/components/ContactsView.vue"),
    },
  ],
});


export default router;
