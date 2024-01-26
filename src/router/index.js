import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '../views/ChatView.vue'
import LoginView from '../views/LoginView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const auth = getAuth()

  onAuthStateChanged(auth, (user) => {
    if (requiresAuth && !user) {
      next('/login')
    } else if (!requiresAuth && user) {
      next('/chat')
    } else {
      next()
    }
  })
})

export default router
