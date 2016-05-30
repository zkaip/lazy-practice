var Lazy = require('lazy.js')

// 删除重复对象
Lazy([1, 2, 2, 3, 3, 3]).uniq() // sequence: [1, 2, 3]
Lazy([{ name: 'mike' }, 
    { name: 'sarah' }, 
    { name: 'mike' }
]).uniq('name')
// sequence: [{ name: 'mike' }, { name: 'sarah' }]