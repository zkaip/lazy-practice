var Lazy = require('lazy.js')

function reverseDigits(x) {
  return Number(String(x).split('').reverse().join(''));
}

Lazy([]).max()                              // => -Infinity
Lazy([6, 18, 2, 48, 29]).max()              // => 48
Lazy([6, 18, 2, 48, 29]).max(reverseDigits) // => 29