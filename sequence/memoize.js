var Lazy = require('lazy.js')
// 每次生成器生成的都是新的Sequence, 用 memoized 会缓存值(同一个对象)
function createObject() { return new Object(); }

var plain    = Lazy.generate(createObject, 10),
    memoized = Lazy.generate(createObject, 10).memoize();

plain.toArray()[0] === plain.toArray()[0];       // => false
memoized.toArray()[0] === memoized.toArray()[0]; // => true