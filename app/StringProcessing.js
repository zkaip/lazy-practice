var Lazy = require('lazy.js')

// 字符串处理
var firstFiveLines = text.split("\n").slice(0, 5);

var firstFiveLines = Lazy(text).split("\n").take(5);

var firstFiveWords = Lazy(text).match(/[a-z0-9]+/i).take(5);