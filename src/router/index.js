import { createRouter, createWebHistory } from 'vue-router';
import SignUpView from "@/views/SignUpView.vue";
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import { auth } from "@/firebaseConfig.js";

const routes = [
  {
    path: "/",
    redirect: "/login" 
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUpView
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
    meta: { requiresAuth: true }
  }
];

// router
const router = createRouter({
  history: createWebHistory(),
  routes
});

// no dejar entrar al login si no está autenticado
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
