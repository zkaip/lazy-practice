var Lazy = require('lazy.js')

var Strict = Lazy.strict()

Strict()                  // throws
Strict(null)              // throws
Strict(true)              // throws
Strict(5)                 // throws
Strict([1, 2, 3])         // instanceof Lazy.ArrayLikeSequence
Strict({ foo: "bar" })    // instanceof Lazy.ObjectLikeSequence
Strict("hello, world!")   // instanceof Lazy.StringLikeSequence

// Let's also ensure the static functions are still there.
Strict.range(3)           // sequence: [0, 1, 2]
Strict.generate(Date.now) // instanceof Lazy.GeneratedSequence