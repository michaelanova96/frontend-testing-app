import { createRouter, createWebHashHistory } from 'vue-router';
import { getCategoryView } from '../views/index';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: { path: '/category/for-dogs' }
    },
    {
      path: '/category/:id',
      name: 'category',
      component: getCategoryView
    }
  ]
});

export default router;
