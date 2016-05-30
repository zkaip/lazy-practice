var Lazy = require('lazy.js')

var people = [
  { name: 'Bob', age: 25 },
  { name: 'Fred', age: 34 }
];

var bob  = people[0],
    fred = people[1];

Lazy(people).indexBy('name')        // sequence: { 'Bob': bob, 'Fred': fred }
Lazy(people).indexBy('name', 'age') // sequence: { 'Bob': 25, 'Fred': 34 }