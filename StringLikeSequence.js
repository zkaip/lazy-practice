var Lazy = require('lazy.js')

// StringLikeSequence.define = function(methodName, overrides) { /*...*/ }
Lazy.StringLikeSequence.define("zomg", {
  length: function() {
    return this.parent.length() + "!!ZOMG!!!1".length;
  },

  get: function(i) {
    if (i < this.parent.length()) {
      return this.parent.get(i);
    }
    return "!!ZOMG!!!1".charAt(i - this.parent.length());
  }
});

Lazy('foo').zomg() // sequence: "foo!!ZOMG!!!1"


// StringLikeSequence.charAt = function(i) { /*...*/ }
Lazy("foo").charAt(0)  // => "f"
Lazy("foo").charAt(-1) // => ""
Lazy("foo").charAt(10) // => ""


// StringLikeSequence.charCodeAt = function(i) { /*...*/ }
Lazy("abc").charCodeAt(0)  // => 97
Lazy("abc").charCodeAt(-1) // => NaN
Lazy("abc").charCodeAt(10) // => NaN



// StringLikeSequence.contains = function(substring) { /*...*/ }
Lazy('hello').contains('ell') // => true
Lazy('hello').contains('')    // => true
Lazy('hello').contains('abc') // => false


// StringLikeSequence.endsWith = function(suffix) { /*...*/ }
Lazy('foo').endsWith('oo')  // => true
Lazy('foo').endsWith('')    // => true
Lazy('foo').endsWith('abc') // => false


// StringLikeSequence.first = function(count) { /*...*/ }
Lazy('foo').first()                // => 'f'
Lazy('fo').first(2)                // sequence: 'fo'
Lazy('foo').first(10)              // sequence: 'foo'
Lazy('foo').toUpperCase().first()  // => 'F'
Lazy('foo').toUpperCase().first(2) // sequence: 'FO'


// StringLikeSequence.indexOf = function(substring, startIndex) { /*...*/ }
Lazy('canal').indexOf('a')    // => 1
Lazy('canal').indexOf('a', 2) // => 3
Lazy('canal').indexOf('ana')  // => 1
Lazy('canal').indexOf('andy') // => -1
Lazy('canal').indexOf('x')    // => -1

// StringLikeSequence.last = function(count) { /*...*/ }
Lazy('foo').last()                // => 'o'
Lazy('foo').last(2)               // sequence: 'oo'
Lazy('foo').last(10)              // sequence: 'foo'
Lazy('foo').toUpperCase().last()  // => 'O'
Lazy('foo').toUpperCase().last(2) // sequence: 'OO'


// StringLikeSequence.lastIndexOf = function(substring, startIndex) { /*...*/ }
Lazy('canal').lastIndexOf('a')    // => 3
Lazy('canal').lastIndexOf('a', 2) // => 1
Lazy('canal').lastIndexOf('ana')  // => 1
Lazy('canal').lastIndexOf('andy') // => -1
Lazy('canal').lastIndexOf('x')    // => -1


// StringLikeSequence.mapString = function(mapFn) { /*...*/ }
function upcase(char) { return char.toUpperCase(); }

Lazy("foo").mapString(upcase)               // sequence: "FOO"
Lazy("foo").mapString(upcase).charAt(0)     // => "F"
Lazy("foo").mapString(upcase).charCodeAt(0) // => 70
Lazy("foo").mapString(upcase).substring(1)  // sequence: "OO"


// StringLikeSequence.match = function(pattern) { /*...*/ }
Lazy("abracadabra").match(/a[bcd]/) // sequence: ["ab", "ac", "ad", "ab"]
Lazy("fee fi fo fum").match(/\w+/)  // sequence: ["fee", "fi", "fo", "fum"]
Lazy("hello").match(/xyz/)          // sequence: []


// StringLikeSequence.reverse = function() { /*...*/ }
Lazy("abcdefg").reverse() // sequence: "gfedcba"


// StringLikeSequence.split = function(delimiter) { /*...*/ }
Lazy("foo").split("")                      // sequence: ["f", "o", "o"]
Lazy("yo dawg").split(" ")                 // sequence: ["yo", "dawg"]
Lazy("bah bah\tblack  sheep").split(/\s+/) // sequence: ["bah", "bah", "black", "sheep"]


// StringLikeSequence.startsWith = function(prefix) { /*...*/ }
Lazy('foo').startsWith('fo')  // => true
Lazy('foo').startsWith('')    // => true
Lazy('foo').startsWith('abc') // => false


// StringLikeSequence.substring = function(start, stop) { /*...*/ }
Lazy("foo").substring(1)      // sequence: "oo"
Lazy("foo").substring(-1)     // sequence: "foo"
Lazy("hello").substring(1, 3) // sequence: "el"
Lazy("hello").substring(1, 9) // sequence: "ello"


// StringLikeSequence.toLowerCase = function() { /*...*/ }
function nextLetter(a) {
  return String.fromCharCode(a.charCodeAt(0) + 1);
}

Lazy('FOO').toLowerCase()                       // sequence: 'foo'
Lazy('FOO').substring(1).toLowerCase()          // sequence: 'oo'
Lazy('ABC').mapString(nextLetter).toLowerCase() // sequence: 'bcd'


// StringLikeSequence.toUpperCase = function() { /*...*/ }
function nextLetter(a) {
  return String.fromCharCode(a.charCodeAt(0) + 1);
}

Lazy('foo').toUpperCase()                       // sequence: 'FOO'
Lazy('foo').substring(1).toUpperCase()          // sequence: 'OO'
Lazy('abc').mapString(nextLetter).toUpperCase() // sequence: 'BCD'