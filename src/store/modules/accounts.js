import { Database } from 'library/Database'

const state = {
  loaded: false,
  currentAccount: {},
  all: []
}

const accounts = {
  namespaced: true,
  state,

  getters: {
    getAccountById: state => id => {
      let account = state.all.find(account => account._id === id)
      return account
    }
  },

  mutations: {
    loading (state) {
      state.loaded = false
    },

    loaded (state, { accounts }) {
      state.all = accounts
      state.loaded = true
    },

    changeAccount (state, account) {
      state.currentAccount = account
    }
  },

  actions: {
    fetch ({ state, commit }) {
      commit('loading')

      const db = Database.getInstance('accounts')

      db.allDocs({include_docs: true, descending: true}).then(accounts => {
        commit('loaded', { accounts: accounts.rows.map(row => row.doc) })
      }).catch(err => {
        console.error(err)
      })
    },

    saveAccount ({ state, commit }, account) {
      const db = Database.getInstance('accounts')

      // Create record if it doesn't exist
      if (account._id === undefined) {
        db.post(account).then(result => {
          console.log('Created account')
          console.log(result)
        }).catch(err => {
          console.error('couldn\'t create account')
          console.error(err)
        })
      }
      else {
        db.put(account).then(result => {
          console.log('Updated account')
          console.log(result)
        }).catch(err => {
          console.error('Couldn\'t update account')
          console.error(err)
        })
      }
    },

    deleteAccount ({ state, dispatch }, account) {
      const db = Database.getInstance('accounts')

      db.remove(account).then(result => {
        console.log('Removed account')
        console.log(result)
      }).catch(err => {
        console.log('Couldn\'t remove account')
        console.error(err)
      })

      dispatch('fetch')
    }
  }
}

export { accounts }
