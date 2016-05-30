var Lazy = require('lazy.js')

// 生成无穷队列
var fibonacci = Lazy.generate(function() {
  var x = 1,
      y = 1;
  return function() {
    var prev = x;
    x = y;
    y += prev;
    return prev;
  };
}());

// Output: undefined
var length = fibonacci.length();

// Output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
fibonacci.take(10).toArray();

/*--------------------------*/

var uniqueRandsFrom1To1000 = Lazy.generate(Math.random)
  .map(function(e) { return Math.floor(e * 1000) + 1; })
  .uniq()
  .take(300);

// Output: see for yourself!
uniqueRandsFrom1To1000.each(function(e) { console.log(e); }); 