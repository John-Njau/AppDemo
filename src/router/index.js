import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '../views/HomeViews.vue'
import ProductsViews from '../views/ProductsViews.vue'
import PastOrders from '../views/PastOrders.vue'

// Defining routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeViews
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsViews
  },
  {
    path: '/past-orders',
    name: 'PastOrders',
    component: PastOrders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
