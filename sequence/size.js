var Lazy = require('lazy.js')

Lazy([1, 2, 3]).size();                 // => 3
Lazy([1, 2]).map(Lazy.identity).size(); // => 2
Lazy([1, 2, 3]).reject(isEven).size();  // => 2
Lazy([1, 2, 3]).take(1).size();         // => 1
Lazy({ foo: 1, bar: 2 }).size();        // => 2
Lazy('hello').size();                   // => 5