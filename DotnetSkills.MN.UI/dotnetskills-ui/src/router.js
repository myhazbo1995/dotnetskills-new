import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/pages/HomePage.vue';
// Import other pages as needed

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;