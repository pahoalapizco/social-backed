'use strict'

const TABLE = 'user';

module.exports = function (injectedStore)  {
  let store = injectedStore;
  
  if (!store) {
    store = require('../../../store/dummy');
  }

  const list = () => {
    return store.list(TABLE);
  }
  
  const get = (id) => {
    return store.get(TABLE, id);
  }
  
  const upsert = (data) => {
    return store.upsert(TABLE, data);
  }
  
  const remove = (id) => {
    return store.remove(TABLE, id);
  }
  
  return {
    list,
    get,
    upsert,
    remove
  };
}
