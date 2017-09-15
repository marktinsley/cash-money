<script>
  import { QToolbar, QToolbarTitle, QBtn, QIcon } from 'quasar'

  export default {

    components: { QToolbar, QToolbarTitle, QBtn, QIcon }
  }
</script>
<template>
  <q-toolbar slot="header">
    <q-toolbar-title>
      Cash Money
    </q-toolbar-title>

    <q-btn flat @click="$router.push({name: 'home'})">
      Home
    </q-btn>

    <q-btn flat @click="$router.push({name: 'accounts.index'})">
      Accounts
    </q-btn>

    <q-btn flat @click="$router.push({name: 'budget.index'})">
      Budget
    </q-btn>

    <q-btn flat @click="$router.push({name: 'import'})">
      Import
    </q-btn>
  </q-toolbar>
</template>
