var Lazy = require('lazy.js')

Lazy([]).isEmpty()        // => true
Lazy([1, 2, 3]).isEmpty() // => false
