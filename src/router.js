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
    { path: '/budget', name: 'budget.index', component: load('Budget/Index') },
    { path: '/import', name: 'import', component: load('Import') },
    { path: '*', component: load('NotFound') }
  ]
})
