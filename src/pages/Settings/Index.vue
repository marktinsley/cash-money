<script>
import {
  Dialog,
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

  methods: {
    addAccount () {
      Dialog.create({
        title: 'warning',
        message: 'you are about to run out of disk space',
        buttons: [
          'Cancel',
          {
            label: 'Empty trash bin',
            handler: () => {
              console.log('Emptied')
            }
          }
        ]
      })
    }
  }
}
</script>

<template>
  <div class="layout-padding">
    <q-list link>
      <q-item>
        <q-item-side left>
          <q-icon name="lock" />
        </q-item-side>
        <q-item-main><q-list-header>Accounts</q-list-header></q-item-main>
        <q-item-side right>
          <q-btn color="positive" round small icon="add" />
        </q-item-side>
      </q-item>
      <q-item-separator />
      <template v-for="account in accounts">
        <q-item :key="account.id">
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
