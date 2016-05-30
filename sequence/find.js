var Lazy = require('lazy.js')

function divisibleBy3(x) {
  return x % 3 === 0;
}

var numbers = [5, 6, 7, 8, 9, 10];

// alias: detect, return *, 找到第一个符合要求的元素
Lazy(numbers).find(divisibleBy3) // => 6
Lazy(numbers).find(isNegative)   // => undefined
