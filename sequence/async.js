var Lazy = require('lazy.js')

// 以2000ms速度异步迭代
Lazy([1, 2, 3]).async(2000).each(function(e, i){
  console.log(e)
})