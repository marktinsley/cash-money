<script>
  import { QToolbar, QToolbarTitle, QBtn } from 'quasar'

  export default {

    components: { QToolbar, QToolbarTitle, QBtn }
  }
</script>
<template>
  <q-toolbar slot="header">
    <q-toolbar-title>
      Cash Money
      <span slot="subtitle">
        {{ $store.state.accounts.currentAccount.name }}
      </span>
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
