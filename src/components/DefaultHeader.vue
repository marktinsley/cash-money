<script>
  import { QToolbar, QToolbarTitle, QBtn, QIcon } from 'quasar'

  export default {
    components: { QToolbar, QToolbarTitle, QBtn, QIcon }
  }
</script>

<template>
  <q-toolbar>
    <q-btn flat v-if="$root.meta.header && $root.meta.header.backButton"
        @click="$router.back()">
      <q-icon name="chevron left"/>
    </q-btn>
    <q-toolbar-title>
      <q-icon v-if="$root.meta.header && $root.meta.header.icon"
          :name="$root.meta.header.icon"/>
      <span v-if="$root.meta.header && $root.meta.header.title">
        {{ $root.meta.header.title }}
      </span>
      <span v-if="$root.meta.header && $root.meta.header.subtitle" slot="subtitle">
        {{ $root.meta.header.subtitle }}
      </span>
    </q-toolbar-title>
  </q-toolbar>
</template>
