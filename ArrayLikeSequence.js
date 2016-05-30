var Lazy = require('lazy.js')

// ArrayLikeSequence.define = function(methodName, overrides) { /*...*/ }
Lazy.ArrayLikeSequence.define("offset", {
  init: function(offset) {
    this.offset = offset;
  },

  get: function(i) {
    return this.parent.get((i + this.offset) % this.parent.length());
  }
});

Lazy([1, 2, 3]).offset(1) // sequence: [2, 3, 1]

// ArrayLikeSequence.concat = function(var_args) { /*...*/ }
Lazy([1, 2]).concat([3, 4]) // instanceof Lazy.ArrayLikeSequence
Lazy([1, 2]).concat([3, 4]) // sequence: [1, 2, 3, 4]

// ArrayLikeSequence.first = function(count) { /*...*/ }
Lazy([1, 2, 3]).first(2) // instanceof Lazy.ArrayLikeSequence

// ArrayLikeSequence.get = function(i) { /*...*/ }
function increment(x) { return x + 1; }

Lazy([1, 2, 3]).get(1)                // => 2
Lazy([1, 2, 3]).get(-1)               // => undefined
Lazy([1, 2, 3]).map(increment).get(1) // => 3

// ArrayLikeSequence.length = function() { /*...*/ }
function increment(x) { return x + 1; }

Lazy([]).length()                       // => 0
Lazy([1, 2, 3]).length()                // => 3
Lazy([1, 2, 3]).map(increment).length() // => 3

// ArrayLikeSequence.map = function(e,i) { /*...*/ }
Lazy([1, 2, 3]).map(Lazy.identity) // instanceof Lazy.ArrayLikeSequence

// ArrayLikeSequence.pop = function() { /*...*/ }
Lazy([1, 2, 3]).pop() // sequence: [1, 2]
Lazy([]).pop()        // sequence: []

// ArrayLikeSequence.rest = function(count) { /*...*/ }
Lazy([1, 2, 3]).rest() // instanceof Lazy.ArrayLikeSequence

// ArrayLikeSequence.reverse = function() { /*...*/ }
Lazy([1, 2, 3]).reverse() // instanceof Lazy.ArrayLikeSequence

// ArrayLikeSequence.shift = function() { /*...*/ }
Lazy([1, 2, 3]).shift() // sequence: [2, 3]
Lazy([]).shift()        // sequence: []

// ArrayLikeSequence.slice = function(begin, end) { /*...*/ }
Lazy([1, 2, 3, 4, 5]).slice(0)     // sequence: [1, 2, 3, 4, 5]
Lazy([1, 2, 3, 4, 5]).slice(2)     // sequence: [3, 4, 5]
Lazy([1, 2, 3, 4, 5]).slice(2, 4)  // sequence: [3, 4]
Lazy([1, 2, 3, 4, 5]).slice(-1)    // sequence: [5]
Lazy([1, 2, 3, 4, 5]).slice(1, -1) // sequence: [2, 3, 4]
Lazy([1, 2, 3, 4, 5]).slice(0, 10) // sequence: [1, 2, 3, 4, 5]