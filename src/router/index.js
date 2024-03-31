import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
  // 点击店铺路由进入店铺
  {
    path: '/store',
    component: () => import('@/views/store/index.vue'),
    meta: {
      // auth 身份验证 ，为true则表示此路由💡需要执行下方定义的路由守卫
      isAuth: true,
    },
  },
  {
    path: '/cart',
    component: () => import('@/views/cart/index.vue'),
    meta: {
      // auth 身份验证 ，为true则表示此路由💡需要执行下方定义的路由守卫
      isAuth: true,
    },
  },
  {
    path: '/mine',
    component: () => import('@/views/mine/index.vue'),
    meta: {
      // auth 身份验证 ，为true则表示此路由💡需要执行下方定义的路由守卫
      isAuth: true,
    },
  },
  {
    path: '/order',
    component: () => import('@/views/order/index.vue'),
    meta: {
      // auth 身份验证 ，为true则表示此路由💡需要执行下方定义的路由守卫
      isAuth: true,
    },
  },

  {
    path: '/createorder',
    component: () => import('@/views/createOrder/index.vue'),
    meta: {
      // auth 身份验证 ，为true则表示此路由💡需要执行下方定义的路由守卫
      isAuth: true,
    },
  },
  // address page
  {
    path: '/address',
    component: () => import('@/views/address/index.vue'),
    meta: {
      // auth 身份验证 ，为true则表示此路由💡需要执行下方定义的路由守卫
      isAuth: true,
    },
  },
  // address edit page
  {
    path: '/addressedit',
    component: () => import('@/views/addressEdit/index.vue'),
    meta: {
      // auth 身份验证 ，为true则表示此路由💡需要执行下方定义的路由守卫
      isAuth: true,
    },
  },
  {
    path: '/manageaccount',
    component: () => import('@/views/manageAccount/index.vue'),
    meta: {
      // auth 身份验证 ，为true则表示此路由💡需要执行下方定义的路由守卫
      isAuth: true,
    },
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/register',
    component: () => import('@/views/register/index.vue'),
  },
  {
    path: '/offline',
    component: () => import('@/views/offline/index.vue'),
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 全局前置路由守卫，用户鉴权，没有登录则无法访问有些页面比如home、login、register、store页面不登陆也可也访问
// 但若点击到店铺 / cart页面时，就需要通过此路由守卫调用，从而判断是否给予用户访问权限
//
// 此路由守卫的是否执行，可以根据路由规则中的meta属性配置,若路由规则中 meta: { isAuth:true}
// auth 身份验证 ，为true则表示此路由💡需要执行下方定义的路由守卫
router.beforeEach((to, from, next) => {
  //💡路由规则需要进行验证,比如购物车页面的跳转时，需要经过/ cart的路由规则
  //                      而它的路由规则中meta.isAuth = true, 说明需要经过此路由守卫的验证
  if (to.meta.isAuth) {
    // 💡校验成功
    //        进行校验用户是否登录，可以根据用户登录后保存在LocalStorage中的isLogin信息判断
    if (localStorage.isLogin === 'login') {
      // 放行，即表示校验通过，同意挑战
      next()
    }
    //💡校验失败
    else {
      console.log(to.path)
      // // // 若点击的是购物车cart||订单order页面||我的mine页面，那么会跳转到额外的路由界面
      if (to.path === '/cart' || to.path === '/order' || to.path === '/mine') {
        // 携带路由query参数，这样offline跳转后会呈现不同内容
        next({
          path: '/offline',
          query: to.path,
        })
      }
      // 校验失败，跳转到登录界面
      else {
        next('/login')
      }
    }
  } else {
    next()
  }
})

export default router
