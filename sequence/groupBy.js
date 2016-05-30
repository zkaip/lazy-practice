var Lazy = require('lazy.js')

function oddOrEven(x) {
  return x % 2 === 0 ? 'even' : 'odd';
}
function square(x) {
  return x*x;
}

var numbers = [1, 2, 3, 4, 5];

// Sequence.groupBy = function(keyFn, valFn) { /*...*/ }
Lazy(numbers).groupBy(oddOrEven)                     // sequence: { odd: [1, 3, 5], even: [2, 4] }
Lazy(numbers).groupBy(oddOrEven).get("odd")          // => [1, 3, 5]
Lazy(numbers).groupBy(oddOrEven).get("foo")          // => undefined
Lazy(numbers).groupBy(oddOrEven, square).get("even") // => [4, 16]

Lazy([
  { name: 'toString' },
  { name: 'toString' }
]).groupBy('name');
// => sequence: {
//   'toString': [
//     { name: 'toString' },
//     { name: 'toString' }
//   ]
// }