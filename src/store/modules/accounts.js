import { Database } from 'library/Database'

const state = {
  loaded: false,

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

      console.log('account')
      console.log(account)

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
    }
  }
}

export { accounts }
