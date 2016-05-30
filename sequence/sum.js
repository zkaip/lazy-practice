var Lazy = require('lazy.js')

Lazy([]).sum()                     // => 0
Lazy([1, 2, 3, 4]).sum()           // => 10
Lazy([1.2, 3.4]).sum(Math.floor)   // => 4
Lazy(['foo', 'bar']).sum('length') // => 6