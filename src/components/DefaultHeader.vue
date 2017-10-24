<script>
  import { QToolbar, QToolbarTitle, QBtn, QIcon } from 'quasar'

  export default {
    components: { QToolbar, QToolbarTitle, QBtn, QIcon }
  }
</script>

<template>
  <q-toolbar>
    <q-btn flat v-if="$route.meta.backButton" @click="$router.back()">
      <q-icon name="chevron left"/>
    </q-btn>
    <q-toolbar-title>
      <q-icon v-if="$route.meta.icon" :name="$route.meta.icon"/>
      {{ $route.meta.title }}
      <span slot="subtitle">
        {{ $route.meta.subtitle }}
      </span>
    </q-toolbar-title>

    <!-- TODO: Should add left and right drawer button's tied to page meta later -->
  </q-toolbar>
</template>
