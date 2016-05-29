var Lazy = require('lazy.js')

Lazy.repeat("hi", 3)          // sequence: ["hi", "hi", "hi"]
Lazy.repeat("young")          // instanceof Lazy.GeneratedSequence
Lazy.repeat("young").length() // => undefined
Lazy.repeat("young").take(3)  // sequence: ["young", "young", "young"]
