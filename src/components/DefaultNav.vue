<script>
  import {
    QTabs,
    QRouteTab
  } from 'quasar'

  export default {
    components: {
      QTabs,
      QRouteTab
    }
  }
</script>

<template>
      <q-tabs align="center" slot="navigation">
        <q-route-tab default slot="title" icon="account box" label="Accounts" to="/accounts" />
        <q-route-tab slot="title" icon="settings" label="Settings" to="/settings" />
      </q-tabs>
</template>
