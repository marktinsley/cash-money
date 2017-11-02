<script>
import {
  QField,
  QInput,
  QBtn
} from 'quasar'

export default {
  components: {
    QField,
    QInput,
    QBtn
  },

  data: () => ({
    nameChanged: false,
    newName: ''
  }),

  computed: {
    account () {
      this.$store.dispatch('accounts/ensureLoaded')
      return this.$store.getters['accounts/getAccountById'](this.$route.params.id)
    },
    accountName: {
      get () {
        if (this.nameChanged === false) {
          if (this.account !== undefined) {
            return this.account.name
          }
          else {
            return 'Untitled'
          }
        }
        else {
          return this.newName
        }
      },
      set (value) {
        if (this.nameChanged === false) {
          this.nameChanged = true
        }
        this.newName = value
      }
    }
  },

  methods: {
    saveAccount () {
      this.$store.dispatch('accounts/saveAccount', {...this.account, name: this.accountName})
      this.$router.back()
    },
    deleteAccount () {
      this.$store.dispatch('accounts/deleteAccount', this.account)
      this.$router.back()
    }
  },

  document () {
    return {
      header: {
        title: this.accountName + ' - Account Settings',
        backButton: true
      },
      head: {
        title: this.accountName + ' - Account Settings'
      }
    }
  }
}
</script>

<template>
  <div class="layout-padding">
    <q-field label="AccountName">
      <q-input v-model="accountName" />
    </q-field>

    <q-btn color="primary" @click="saveAccount">Save</q-btn>
    <q-btn @click="$router.back()">Cancel</q-btn>
    <q-btn color="negative" @click="deleteAccount">
      Delete
    </q-btn>
  </div>
</template>
