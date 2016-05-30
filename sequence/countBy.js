var Lazy = require('lazy.js')

var numbers = [1, 2, 3, 4, 5]

function oddOrEven(x) {
  return x % 2 === 0 ? 'even' : 'odd'
}

Lazy(numbers).countBy(oddOrEven)            // sequence: { odd: 3, even: 2 }
Lazy(numbers).countBy(oddOrEven).get("odd") // => 3
Lazy(numbers).countBy(oddOrEven).get("foo") // => undefined