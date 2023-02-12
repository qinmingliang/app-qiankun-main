import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import { routes } from './router.js';
const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(process.env.BASE_URL),
    base:process.env.BASE_URL,
    routes
  })
router.beforeEach( async (to) => {
    const token = localStorage.getItem('system_token')
    // next()
 if (to.name !== 'login'&&(!token || token === 'undefined')) {
      // next({ name: 'login'});
      return { name: 'login' }
  } 
});

export default router;
