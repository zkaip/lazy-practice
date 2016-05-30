var Lazy = require('lazy.js')


var people = [
  { first: "Dan", last: "Tao" },
  { first: "Bob", last: "Smith" }
];
// 根据所给的属性生成一个新的Sequence
Lazy(people).pluck("last") // sequence: ["Tao", "Smith"]