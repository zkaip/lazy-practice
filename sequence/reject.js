var Lazy = require('lazy.js')

// exclude condition
Lazy([1, 2, 3, 4, 5]).reject(isEven)              // sequence: [1, 3, 5]
Lazy([{ foo: 1 }, { bar: 2 }]).reject('foo')      // sequence: [{ bar: 2 }]
Lazy([{ foo: 1 }, { foo: 2 }]).reject({ foo: 2 }) // sequence: [{ foo: 1 }]