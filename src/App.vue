<script>
  import { QLayout, QBtn } from 'quasar'
  import CmNav from '@/Nav'

  export default {
    components: { QLayout, QBtn, CmNav }
  }
</script>

<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout>
      <cm-nav></cm-nav>
      <router-view/>
    </q-layout>
  </div>
</template>

<style></style>
