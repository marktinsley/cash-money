// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import VueDocument, { titleInjector, metaInjector } from 'vue-document'
import PortalVue from '@zicklag/portal-vue'

// Sync the Vue Router and the Vuex Store
sync(store, router)

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework

// vue-document injector for site-wide metadata
function appMetaInjector (document) {
  this.$root.meta = this.$root.$document
}

Vue.use(VueDocument, {
  injector: [titleInjector, metaInjector, appMetaInjector]
})

// We import this globally. I don't think that this is a package size
// disadvantage because the global App layout uses portals and is required on
// every page anyway.
Vue.use(PortalVue)

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

// Quasar transitions
// TODO: Only include the ones that we use
import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    // App-wide metadata
    data: () => ({
      meta: null
    }),
    store,
    router,
    render: h => h(require('./App'))
  })
})
