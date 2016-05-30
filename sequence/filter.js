var Lazy = require('lazy.js')

var numbers = [1, 2, 3, 4, 5, 6]
// alias: select
Lazy(numbers).filter(isEven) // sequence: [2, 4, 6]