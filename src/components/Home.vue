<script>
  import { QLayout, QToolbar, QToolbarTitle, QBtn, QIcon } from 'quasar'

  export default {
    components: { QLayout, QToolbar, QToolbarTitle, QBtn, QIcon }
  }
</script>

<template>
  <q-layout>
    <q-toolbar slot="header">
      <q-toolbar-title>
        Cash Money
      </q-toolbar-title>

      <q-btn flat>
        Accounts
      </q-btn>

      <q-btn flat>
        Budget
      </q-btn>

      <q-btn flat>
        Import
      </q-btn>
    </q-toolbar>

    <div class="layout-padding logo-container non-selectable no-pointer-events">
      fsdlkfj
    </div>
  </q-layout>
</template>
