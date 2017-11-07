import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function loadPage (component) {
  return () => import(`pages/${component}.vue`)
}

function loadComponent (component) {
  return () => import(`components/${component}.vue`)
}

let router = new VueRouter({
  routes: [
    { path: '/', name: 'home', redirect: '/accounts' },

    {
      path: '/accounts',
      components: {
        default: loadPage('LayoutRouterView'),
        navigation: loadComponent('DefaultNav'),
        header: loadComponent('AccountSelectHeader')
      },
      children: [
        { path: '', name: 'accounts.index', component: loadPage('Accounts/List') },
        { path: 'create', name: 'accounts.create', component: loadPage('Accounts/Form') },
        { path: ':id/edit', name: 'accounts.edit', component: loadPage('Accounts/Form') }
      ]
    },

    {
      path: '/settings',
      components: {
        default: loadPage('LayoutRouterView'),
        header: loadComponent('DefaultHeader')
      },
      children: [
        {
          path: '',
          name: 'settings',
          component: loadPage('Settings/Index')
        },
        {
          path: 'account/:id',
          name: 'settings.account',
          component: loadPage('Settings/EditAccount')
        }
      ]
    },

    { path: '/budget', name: 'budget.index', component: loadPage('Budget/Index') },

    { path: '/import', name: 'import', component: loadPage('Import') },
    { path: '*', component: loadPage('NotFound') }
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
