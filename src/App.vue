<script>
  import {
    QLayout,
    QRouteTab,
    QSelect,
    QTabs,
    QToolbar,
    QToolbarTitle
  } from 'quasar'

  export default {
    components: {
      QLayout,
      QRouteTab,
      QSelect,
      QTabs,
      QToolbar,
      QToolbarTitle
    },

    data () {
      return {
        selected: null
      }
    },

    computed: {
      accountSelectLabel () {
        let accountSelected = this.$store.state.accounts.currentAccountId !== null
        return accountSelected ? 'Account' : 'Select Account'
      },

      accountNames () {
        if (this.$store.state.accounts.all.length === 0) {
          this.$store.dispatch('accounts/fetch')
        }

        return this.$store.state.accounts.all.map(account => {
          return {label: account.name, value: account._id}
        })
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
    <q-layout ref="appLayout" view="lHh LpR lFf">
      <q-toolbar slot="header">
        <q-toolbar-title>
          <q-select dark color="white"
                    :float-label="accountSelectLabel"
                    placeholder="Select Account"
                    align="center"
                    v-model="selectedAccountId"
                    :options="accountNames" />
        </q-toolbar-title>
      </q-toolbar>

      <router-view/>

      <q-tabs align="center" slot="navigation">
        <q-route-tab default slot="title" icon="home" label="Home" to="/" />
        <q-route-tab slot="title" icon="lock" label="Accounts" to="/accounts" />
      </q-tabs>
    </q-layout>
  </div>
</template>

<style></style>
