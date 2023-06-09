import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { getAuth } from "firebase/auth";
import "@/firebase.js";

const auth = getAuth();
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("@/views/AdminView.vue"),
      meta: { authRequired: true },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/createuser",
      name: "CreateUser",
      component: () => import("@/views/CreateUserView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  const requiresAuth = to.meta.authRequired;

  if (requiresAuth && !currentUser) {
    next("/login");
  } else {
    next();
  }
});

router.resolve = (to) => {
  if (to.href) {
    window.open(to.href, "_self");
    return new Promise(() => {});
  }
};

export default router;
