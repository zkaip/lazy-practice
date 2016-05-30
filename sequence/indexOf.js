var Lazy = require('lazy.js')

function reciprocal(x) { return 1 / x; }

Lazy(["foo", "bar", "baz"]).indexOf("bar")   // => 1
Lazy([1, 2, 3]).indexOf(4)                   // => -1
Lazy([1, 2, 3]).map(reciprocal).indexOf(0.5) // => 1