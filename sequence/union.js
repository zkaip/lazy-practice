var Lazy = require('lazy.js')

// 并集
Lazy(["foo", "bar"]).union([])             // sequence: ["foo", "bar"]
Lazy(["foo", "bar"]).union(["bar", "baz"]) // sequence: ["foo", "bar", "baz"]