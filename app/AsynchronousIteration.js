var Lazy = require('lazy.js')

// 异步迭代
var asyncSequence = Lazy(array)
  .async(100) // specifies a 100-millisecond interval between each element
  .map(inc)
  .filter(isEven)
  .take(20);

// This function returns immediately and begins iterating over the sequence asynchronously.
asyncSequence.each(function(e) {
  console.log(new Date().getMilliseconds() + ": " + e);
});

function inc(x) { return x + 1; }
function isEven(x) { return x % 2 === 0; }