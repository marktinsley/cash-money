<script>
  import { QBtn, QInput } from 'quasar'

  export default {
    components: { QBtn, QInput },

    data: () => ({
      name: ''
    }),

    computed: {
      isEdit () {
        return this.$route.params.id !== undefined
      },

      title () {
        return (this.isEdit ? 'Edit' : 'Create') + ' Account'
      },

      account () {
        if (this.isEdit) {
          return this.$store.getters['accounts/getAccountById'](this.$route.params.id)
        }
        else {
          return {}
        }
      }
    },

    methods: {
      saveAccount: function () {
        this.$store.dispatch('accounts/saveAccount', {...this.account, name: this.name})
        this.$router.push({name: 'accounts.index'})
      }
    }
  }
</script>

<template>
  <div class='layout-padding'>
    <div class='logo-container non-selectable no-pointer-events'>
      <h1>{{ title }}</h1>
      <h3 v-if="isEdit">{{ account.name }}</h3>
    </div>

    <q-input float-label='Name' v-model=name></q-input>

    <q-btn color='primary' v-on:click='saveAccount'>Save</q-btn>

    <q-btn flat @click="$router.push({name: 'accounts.index'})">Cancel</q-btn>
  </div>
</template>
