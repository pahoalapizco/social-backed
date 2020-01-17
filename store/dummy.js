let db = {
  'user': [
    {
      id: '1',
      name: 'Paola Alapizco',
      username: 'pahoalapizco'
    },
    {
      id: '2',
      name: 'David Lopez',
      username: 'DAVIRCORP'
    }
  ]
};

const list = async (table) => {
  return db[table];
}

const get = async (table, id) => {
  const collection = await list(table);
  return collection.filter(item => item.id === id) || null;

}

const upsert = async (table, data) => {
  db[table].push({...data});
}

const remove = async (table, id) => {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove
};
