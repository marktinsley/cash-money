<script>
  import { QLayout, QBtn, QIcon } from 'quasar'
  import CmNav from '@/Nav'

  export default {
    components: { QLayout, QBtn, QIcon, CmNav }
  }
</script>

<template>
  <q-layout>
    <cm-nav></cm-nav>

    <div class="layout-padding logo-container non-selectable no-pointer-events">
      <h1>Budget</h1>
    </div>
  </q-layout>
</template>

