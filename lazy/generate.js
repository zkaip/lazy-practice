var Lazy = require('lazy.js')

var randomNumbers = Lazy.generate(Math.random)
var countingNumbers = Lazy.generate((i) => (i+1), 6)

console.log(randomNumbers.get())
console.log(randomNumbers instanceof Lazy.GeneratedSequence) // true
console.log(randomNumbers.length()) // undefined
console.log(countingNumbers)
console.log(countingNumbers.length()) // 6