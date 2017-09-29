import PouchDb from 'pouchdb'

export class Database {
  static getInstance (name) {
    return new PouchDb(`cash-money_${name}`, { adapter: 'idb' })
  }

  static closeConnection () {

  }
}
