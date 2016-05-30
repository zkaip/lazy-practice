var Lazy = require('lazy.js')

var numbers = [1, 2, 3, 4, 5];

// 检测符合该条件的元素是否都不存在
Lazy(numbers).none()           // => false
Lazy(numbers).none(isEven)     // => false
Lazy(numbers).none(isNegative) // => true
Lazy([]).none(isEven)          // => true
Lazy([]).none(isNegative)      // => true
Lazy([]).none()                // => true
