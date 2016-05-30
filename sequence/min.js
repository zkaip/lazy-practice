var Lazy = require('lazy.js')

function negate(x) { return x * -1; }

Lazy([]).min()                       // => Infinity
Lazy([6, 18, 2, 49, 34]).min()       // => 2
Lazy([6, 18, 2, 49, 34]).min(negate) // => 49