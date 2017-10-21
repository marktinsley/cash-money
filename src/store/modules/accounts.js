import { Database } from 'library/Database'

const state = {
  loaded: false,
  loading: false,
  currentAccountId: null,
  all: []
}

const accounts = {
  namespaced: true,
  state,

  getters: {
    getAccountById: state => id => {
      let account = state.all.find(account => account._id === id)
      return account
    },

    getCurrentAccount: (state, getters) => {
      const account = getters.getAccountById(state.currentAccountId)
      if (account) {
        return account
      }
      else {
        return {}
      }
    }
  },

  mutations: {
    loading (state) {
      state.loading = true
      state.loaded = false
    },

    loaded (state, { accounts }) {
      state.all = accounts
      state.loaded = true
      state.loading = false
    },

    changeAccount (state, accountId) {
      state.currentAccountId = accountId
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

    ensureLoaded ({ state, commit, dispatch }) {
      if (state.loaded === false && state.loading === false) {
        dispatch('fetch')
      }
    },

    saveAccount ({ state, commit, dispatch }, account) {
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

      dispatch('fetch')
    },

    deleteAccount ({ state, commit, dispatch }, account) {
      const db = Database.getInstance('accounts')

      db.remove(account).then(result => {
        console.log('Removed account')
        console.log(result)
      }).catch(err => {
        console.log('Couldn\'t remove account')
        console.error(err)
      })

      commit('changeAccount', null)
      dispatch('fetch')
    }
  }
}

export default accounts
