var Lazy = require('lazy.js')

Lazy(["a", "b", "c", "b", "a"]).lastIndexOf("b")    // => 3
Lazy([1, 2, 3]).lastIndexOf(0)                      // => -1
Lazy([2, 2, 1, 2, 4]).filter(isEven).lastIndexOf(2) // 2