import PouchDb from 'pouchdb'

export class Database {
  static _instance = null

  static getInstance () {
    if (!Database._instance) {
      Database._instance = new PouchDb('somefilename', { adapter: 'idb' })
    }
    console.warn('adap', Database._instance.adapter)

    return Database._instance
  }

  static closeConnection () {

  }
}
