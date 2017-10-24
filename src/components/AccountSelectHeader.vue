<script>
  import {
    QSelect,
    QToolbar,
    QToolbarTitle,
    QSpinner
  } from 'quasar'

  export default {
    components: {
      QSelect,
      QToolbar,
      QToolbarTitle,
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
</template
