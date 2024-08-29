import { createRouter, createWebHashHistory } from 'vue-router';
import ContainerView from '@/views/Container.vue';
import LoginView from '@/views/Login.vue';

const routes = [
  {
    path:'/',
    component:ContainerView
  },
  {
    path:'/login',
    component:LoginView
  }
];
const router = createRouter({
  history : createWebHashHistory('/'),
  routes
});

export default router;