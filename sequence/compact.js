var Lazy = require('lazy.js')

// 返回一个新的不含 false 0 "" null undefined的数组
Lazy(["foo", null, "bar", undefined]).compact() // sequence: ["foo", "bar"]
