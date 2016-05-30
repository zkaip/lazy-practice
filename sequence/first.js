var Lazy = require('lazy.js')

function powerOfTwo(exp) {
  return Math.pow(2, exp);
}

// return * (if count==undefined) || sequence
Lazy.generate(powerOfTwo).first()          // => 1
Lazy.generate(powerOfTwo).first(5)         // sequence: [1, 2, 4, 8, 16]
Lazy.generate(powerOfTwo).skip(2).first()  // => 4
Lazy.generate(powerOfTwo).skip(2).first(2) // sequence: [4, 8]