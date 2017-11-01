<script>
import {
  QItem,
  QBtn,
  QIcon,
  QItemMain,
  QItemSeparator,
  QItemSide,
  QItemTile,
  QList,
  QListHeader
} from 'quasar'

export default {
  components: {
    QItem,
    QBtn,
    QIcon,
    QItemMain,
    QItemSeparator,
    QItemSide,
    QItemTile,
    QList,
    QListHeader
  },

  computed: {
    accounts () {
      if (this.$store.state.accounts.all.length === 0) {
        this.$store.dispatch('accounts/fetch')
      }
      return this.$store.state.accounts.all
    }
  },

  document: {
    head: {
      title: 'Settings'
    },
    header: {
      title: 'Settings',
      icon: 'settings',
      backButton: true
    }
  }
}
</script>

<template>
  <div class="layout-padding">
    <q-list link>
      <q-item>
        <q-item-side left>
          <q-icon name="account box" style="font-size: 1.5em" />
        </q-item-side>
        <q-item-main><q-list-header>Accounts</q-list-header></q-item-main>
        <q-item-side right>
          <q-btn color="positive" round small icon="add" />
        </q-item-side>
      </q-item>
      <q-item-separator />
      <template v-for="account in accounts">
        <q-item :key="account.id" @click="$router.push({name: 'settings.account', params: {id: account._id }})">
          <q-item-main :label="account.name"></q-item-main>
          <q-item-side right>
            <q-icon name='chevron_right' />
          </q-item-side>
        </q-item>
        <q-item-separator />
      </template>
    </q-list>
  </div>
</template>

<style lang="stylus">
.q-item-main .q-list-header
  margin-left: -30px
</style>
