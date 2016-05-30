var Lazy = require('lazy.js')

function lessThan(x) {
  return function(y) {
    return y < x;
  };
}
// 一旦不满足条件, 迭代停止
Lazy([1, 2, 3, 4]).takeWhile(lessThan(3)) // sequence: [1, 2]
Lazy([1, 2, 3, 4]).takeWhile(lessThan(0)) // sequence: []
