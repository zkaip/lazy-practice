var Lazy = require('lazy.js')
// 选出重复的元素
Lazy(["foo", "bar"]).intersection([])             // sequence: []
Lazy(["foo", "bar"]).intersection(["bar", "baz"]) // sequence: ["bar"]