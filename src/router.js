import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => import(`pages/${component}.vue`)
}

export default new VueRouter({
  routes: [
    { path: '/', name: 'home', component: load('Home') },

    { path: '/accounts', name: 'accounts.index', component: load('Accounts/Index') },
    { path: '/accounts/create', name: 'accounts.create', component: load('Accounts/Form') },
    { path: '/accounts/:id/edit', name: 'accounts.edit', component: load('Accounts/Form') },

    { path: '/budget', name: 'budget.index', component: load('Budget/Index') },

    { path: '/import', name: 'import', component: load('Import') },
    { path: '*', component: load('NotFound') }
  ]
})
