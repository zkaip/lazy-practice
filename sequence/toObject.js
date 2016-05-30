var Lazy = require('lazy.js')

var details = [
  ["first", "Dan"],
  ["last", "Tao"],
  ["age", 29]
];
// 根据 key/value 创建对象
Lazy(details).toObject() // => { first: "Dan", last: "Tao", age: 29 }