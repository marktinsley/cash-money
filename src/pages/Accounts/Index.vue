<script>
  import { QBtn, QList, QIcon, QItem, QItemSide, QItemMain, QItemSeparator, QSpinner } from 'quasar'

  export default {
    components: { QBtn, QList, QIcon, QItem, QItemSide, QItemMain, QItemSeparator, QSpinner },

    created () {
      this.$store.dispatch('accounts/ensureLoaded')
    },

    computed: {
      accounts () {
        return this.$store.state.accounts.all
      }
    },

    methods: {
      isCurrentAccount: function (account) {
        return this.$store.state.accounts.currentAccountId === account._id
      }
    }
  }
</script>

<template>
  <div>
    <div class="layout-padding">
      <div class="logo-container non-selectable no-pointer-events">
        <h1>Accounts</h1>
      </div>

      <q-spinner v-if="$store.state.accounts.loading" :size="40" color="primary"></q-spinner>

      <template v-if="$store.state.accounts.loaded">
        <q-btn icon="add" round color="positive" @click="$router.push({name: 'accounts.create'})">
        </q-btn>

        <q-list>
          <template v-for="account in accounts">
            <q-item :key="account.id">
              <q-item-main :label="account.name"></q-item-main>
              <q-item-side v-if="isCurrentAccount(account)" left>
                <q-icon name="star" />
              </q-item-side>
              <q-item-side right>
                <q-btn color="primary" @click="$store.commit('accounts/changeAccount', account._id)">
                  Select
                </q-btn>
              </q-item-side>
              <q-item-side right>
                <q-btn color="secondary" @click="$router.push({name: 'accounts.edit', params: {id: account._id}})">
                  Edit
                </q-btn>
              </q-item-side>
              <q-item-side right>
                <q-btn color="negative" @click="$store.dispatch('accounts/deleteAccount',account)">
                  Delete
                </q-btn>
              </q-item-side>
            </q-item>
            <q-item-separator></q-item-separator>
          </template>
        </q-list>
      </template>
    </div>
  </div>
</template>
