var Lazy = require('lazy.js')

function addIndexToValue(e, i) { return e + i; }
function increment(e, i) { return parseInt(e)++ }

Lazy([]).map(increment)              // sequence: []
Lazy([1, 2, 3]).map(increment)       // sequence: [2, 3, 4]
Lazy([1, 2, 3]).map(addIndexToValue) // sequence: [1, 3, 5]