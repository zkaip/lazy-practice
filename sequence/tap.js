var Lazy = require('lazy.js')

// 不同于each的是, 可以在链式调用中间的链上使用
Lazy([1, 2, 3]).tap(fn).each(Lazy.noop); // calls fn 3 times
