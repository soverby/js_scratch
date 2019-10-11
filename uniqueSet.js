const resultSet = [
    { id: '555', nat_key: 'abc'},
    { id: '777', nat_key: 'def'},
    { id: '888', nat_key: 'ghi'},
    { id: '999', nat_key: 'jkl'}
]

const natKeyList = ['qrs', 'abc', 'def', 'ghi', 'jkl', 'mno']

const resultSetKeys = []

// resultSet.map(row => row.nat_key).forEach(key => resultSetKeys.push(key))
resultSet.map(row => row.nat_key).reduce( (accum, key) => { accum.push(key); return accum }, resultSetKeys)

console.log(`resultSetKeys: ${resultSetKeys}`)

const orphanKeys = []

natKeyList.forEach(key => resultSetKeys.indexOf(key) === -1 ? orphanKeys.push(key) : '')

console.log(`orphan keys: ${orphanKeys}`)
