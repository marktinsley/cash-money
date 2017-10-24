<script>
  import {
    QLayout,
    QTransition
  } from 'quasar'

  export default {
    components: {
      QLayout,
      QTransition
    }
  }
</script>

<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout ref="appLayout" view="lHh LpR lFf" reveal>
      <router-view slot="header" name="header"/>
      <router-view slot="navigation" name="naviation"/>
      <q-transition enter="fadeIn" leave="fadeOut" group>
        <router-view key="app-router-view"/>
      </q-transition>
    </q-layout>
  </div>
</template>
