var Lazy = require('lazy.js')

Lazy([6, 29, 1984]).join("/")  // => "6/29/1984"
Lazy(["a", "b", "c"]).join()   // => "a,b,c"
Lazy(["a", "b", "c"]).join("") // => "abc"
Lazy([1, 2, 3]).join()         // => "1,2,3"
Lazy([1, 2, 3]).join("")       // => "123"
Lazy(["", "", ""]).join(",")   // => ",,"
