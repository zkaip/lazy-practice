var Lazy = require('lazy.js')

// 移除末尾元素, 默认 1
Lazy([1, 2, 3, 4]).initial()                    // sequence: [1, 2, 3]
Lazy([1, 2, 3, 4]).initial(2)                   // sequence: [1, 2]
Lazy([1, 2, 3]).filter(Lazy.identity).initial() // sequence: [1, 2]