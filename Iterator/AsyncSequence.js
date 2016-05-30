// 返回 值

// 如何定义一个AsyncSequence
// 1. 实现一个迭代器接口(一个含有Iterator#moveNext#current的对象)
// 2. 创建一个继承AsyncSequence的包裹(返回一个你定义的迭代器实例)

function AsyncSequence(parent, interval) { /*...*/ }
AsyncSequence.contains = function(value) { /*...*/ }
AsyncSequence.each = function(fn) { /*...*/ }
AsyncSequence.find = function(predicate) { /*...*/ }
AsyncSequence.indexOf = function(value) { /*...*/ }
// Throws an exception. You cannot manually iterate over an asynchronous sequence.
Lazy([1, 2, 3]).async().getIterator() // throws