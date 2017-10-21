import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => import(`pages/${component}.vue`)
}

let router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: load('Home') },

    { path: '/accounts', name: 'accounts.index', component: load('Accounts/Index') },
    { path: '/accounts/create', name: 'accounts.create', component: load('Accounts/Form') },
    { path: '/accounts/:id/edit', name: 'accounts.edit', component: load('Accounts/Form') },

    {
      path: '/settings',
      name: 'settings',
      meta: { title: 'Settings', icon: 'settings' },
      component: load('Settings')
    },

    { path: '/budget', name: 'budget.index', component: load('Budget/Index') },

    { path: '/import', name: 'import', component: load('Import') },
    { path: '*', component: load('NotFound') }
  ]
})

router.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0

  // if (to.meta) {
  //   showcaseStore.set(to.meta)
  // }
  next()
})

export default router
