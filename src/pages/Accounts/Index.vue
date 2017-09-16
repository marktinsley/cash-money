<script>
  import { QBtn, QList, QItem, QItemSide, QItemMain, QItemSeparator } from 'quasar'

  export default {
    components: { QBtn, QList, QItem, QItemSide, QItemMain, QItemSeparator },

    computed: {
      accounts () {
        return this.$store.state.accounts.all
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

      <q-btn icon="add" round color="positive" @click="$router.push({name: 'accounts.create'})">
      </q-btn>

      <q-list>
        <template v-for="account in accounts">
          <q-item :key="account.id">
            <q-item-main :label="account.name"></q-item-main>
            <q-item-side right>
              <q-btn color="primary" @click="$router.push({name: 'accounts.edit', params: {id: account.id}})">
                Edit
              </q-btn>
            </q-item-side>
          </q-item>
          <q-item-separator></q-item-separator>
        </template>
      </q-list>
    </div>
  </div>
</template>
