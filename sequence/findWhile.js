var Lazy = require('lazy.js')

var words = ["foo", "bar"];

// 找到第一个 位置符合 且 值match 的元素
Lazy(words).findWhere({ 0: "f" }); // => "foo"
Lazy(words).findWhere({ 0: "z" }); // => undefined