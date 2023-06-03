import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes:[

    {
      path: '/',
      component: () => import ('../views/home/HomePage.vue')
    },
    {
      path: '/home',
      component: () => import ('../views/home/HomePage.vue')
    },
    {
      path: '/cart',
      component: () => import ('../views/cart/CartPage.vue')
    },
    {
      path: '/order',
      component: () => import ('../views/order/OrderPage.vue')
    },
    {
      path: '/mine',
      component: () => import ('../views/mine/MinePage.vue')
    },
    {
      path: '/store',
      component: () => import ('../views/store/StorePage.vue')
    },

  ]
})

export default router