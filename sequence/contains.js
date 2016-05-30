var Lazy = require('lazy.js')

var numbers = [5, 10, 15, 20]

Lazy(numbers).contains(15) // true
Lazy(numbers).contains(13) // false