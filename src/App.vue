<script>
  import {
    QLayout,
    QRouteTab,
    QSelect,
    QTabs,
    QToolbar,
    QToolbarTitle,
    QTransition,
    QSpinner
  } from 'quasar'

  export default {
    components: {
      QLayout,
      QRouteTab,
      QSelect,
      QTabs,
      QToolbar,
      QToolbarTitle,
      QTransition,
      QSpinner
    },

    data () {
      return {
        selected: null
      }
    },

    created () {
      this.$store.dispatch('accounts/ensureLoaded')
    },

    computed: {
      accountSelectLabel () {
        if (this.$store.state.accounts.loading === true) {
          return 'Loading...'
        }
        else if (this.$store.state.accounts.currentAccountId !== null) {
          return 'Account'
        }
        else {
          return 'Select Account'
        }
      },

      accountNames () {
        return this.$store.state.accounts.all.map(account => (
          {label: account.name, value: account._id}
        ))
      },

      selectedAccountId: {
        get () {
          return this.$store.state.accounts.currentAccountId
        },
        set (id) {
          this.$store.commit('accounts/changeAccount', id)
        }
      }
    }
  }
</script>

<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout ref="appLayout" view="lHh LpR lFf" reveal>
      <q-toolbar slot="header">
        <q-toolbar-title>
          <q-select dark color="white"
                    :float-label="accountSelectLabel"
                    placeholder="Select Account"
                    align="center"
                    v-model="selectedAccountId"
                    :options="accountNames" />
        </q-toolbar-title>
        <q-spinner v-if="$store.state.accounts.loading" :size="40" color="white"></q-spinner>
      </q-toolbar>

      <q-transition enter="fadeIn" leave="fadeOut" group>
        <router-view key="app-router-view"/>
      </q-transition>

      <q-tabs align="center" slot="navigation">
        <q-route-tab default slot="title" icon="home" label="Home" to="/" />
        <q-route-tab slot="title" icon="lock" label="Accounts" to="/accounts" />
        <q-route-tab slot="title" icon="settings" label="Settings" to="/settings" />
      </q-tabs>
    </q-layout>
  </div>
</template>

<style></style>
