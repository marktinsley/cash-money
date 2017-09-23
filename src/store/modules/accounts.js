import { Database } from 'library/Database'

const state = {
  loaded: false,

  all: []
}

const accounts = {
  namespaced: true,
  state,

  getters: {},

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
    fetch ({ commit }) {
      commit('loading')

      const db = Database.getInstance()
      db.get('testing')
        .then(a => console.log(a))

      window.setTimeout(() => commit('loaded', {
        accounts:
          [
            { id: 1, name: 'Bank Checking' },
            { id: 2, name: 'Bank Savings' },
            { id: 3, name: 'Card 1' }
          ]
      }), 1000)
    }
  }
}

export { accounts }
