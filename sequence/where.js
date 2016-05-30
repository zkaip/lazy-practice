var Lazy = require('lazy.js')

var people = [
  { first: "Dan", last: "Tao" },
  { first: "Bob", last: "Smith" }
];
// property names and values matching objects
Lazy(people).where({ first: "Dan" }) // sequence: [{ first: "Dan", last: "Tao" }]