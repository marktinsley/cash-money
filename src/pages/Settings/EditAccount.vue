<script>
import {
  Dialog,
  QField,
  QIcon,
  QInput,
  QToolbar,
  QToolbarTitle,
  QBtn
} from 'quasar'

export default {
  components: {
    QField,
    QIcon,
    QInput,
    QToolbar,
    QToolbarTitle,
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
      Dialog.create({
        title: 'Delete Account',
        message: `Are you sure you want to delete account '${this.accountName}'?`,
        buttons: [
          {
            label: 'Delete',
            color: 'negative',
            outline: true,
            handler: () => {
              this.$store.dispatch('accounts/deleteAccount', this.account)
              this.$router.back()
            }
          },
          {
            label: 'Cancel'
          }
        ]
      })
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
    <portal to="default-header--right">
      <q-btn color="negative" @click="deleteAccount">
        <q-icon name="delete" />
      </q-btn>
    </portal>
    <q-field label="Account Name" :label-width="2">
      <q-input v-model="accountName" placeholder="Name"/>
    </q-field>
    <div style="float: right;">
      <q-btn color="primary" icon="check" @click="saveAccount">Save</q-btn>
      <q-btn color="secondary" icon="cancel" @click="$router.back()">Cancel</q-btn>
    </div>
  </div>
</template>
