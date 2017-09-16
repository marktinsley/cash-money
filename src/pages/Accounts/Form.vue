<script>
  import { QBtn, QInput } from 'quasar'

  export default {
    components: { QBtn, QInput },

    computed: {
      isEdit () {
        return this.$route.params.id > 0
      },

      title () {
        return (this.isEdit ? 'Edit' : 'Create') + ' Account'
      },

      account () {
        return this.isEdit
          ? this.$store.state.accounts.all.find(account => account.id === Number(this.$route.params.id))
          : {}
      }
    }
  }
</script>

<template>
  <div class="layout-padding">
    <div class="logo-container non-selectable no-pointer-events">
      <h1>{{ title }}</h1>
    </div>

    <q-input float-label="Name" :value="account.name"></q-input>

    <q-btn color="primary">Save</q-btn>

    <q-btn flat @click="$router.push({name: 'accounts.index'})">Cancel</q-btn>
  </div>
</template>
