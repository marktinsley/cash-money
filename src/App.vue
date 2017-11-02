<script>
  import {
    QLayout
  } from 'quasar'

  export default {
    components: {
      QLayout
    },

    document: {
      head: {
        title: 'Cash Money'
      }
    }
  }
</script>

<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout ref="appLayout" view="lHh LpR lFf">
      <router-view slot="header" name="header"/>
      <router-view slot="navigation" name="navigation"/>
      <router-view/>
    </q-layout>
  </div>
</template>
