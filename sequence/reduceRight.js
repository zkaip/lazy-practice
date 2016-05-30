var Lazy = require('lazy.js')

function append(s1, s2) {
  return s1 + s2;
}

function isVowel(str) {
  return "aeiou".indexOf(str) !== -1;
}

// aliases: foldr
Lazy("abcde").reduceRight(append)                 // => "edcba"
Lazy("abcde").filter(isVowel).reduceRight(append) // => "ea"