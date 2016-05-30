var Lazy = require('lazy.js')

Lazy([5, 10, 1]).sort()                // sequence: [1, 5, 10]
Lazy(['foo', 'bar']).sort()            // sequence: ['bar', 'foo']
Lazy(['b', 'c', 'a']).sort(null, true) // sequence: ['c', 'b', 'a']
Lazy([5, 10, 1]).sort(null, true)      // sequence: [10, 5, 1]

// Sorting w/ custom comparison function
Lazy(['a', 'ab', 'aa', 'ba', 'b', 'abc']).sort(function compare(x, y) {
  if (x.length && (x.length !== y.length)) { return compare(x.length, y.length); }
  if (x === y) { return 0; }
  return x > y ? 1 : -1;
});
// => sequence: ['a', 'b', 'aa', 'ab', 'ba', 'abc'