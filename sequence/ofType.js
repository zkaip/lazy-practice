var Lazy = require('lazy.js')

// 过滤某种类型
Lazy([1, 2, 'foo', 'bar']).ofType('number')  // sequence: [1, 2]
Lazy([1, 2, 'foo', 'bar']).ofType('string')  // sequence: ['foo', 'bar']
Lazy([1, 2, 'foo', 'bar']).ofType('boolean') // sequence: []