// An AsyncHandle provides a Promises/A+ compliant interface for an AsyncSequence that is currently (or was) iterating over its elements.

function AsyncHandle(cancelFn) { /*...*/ }

// Create a sequence of 100,000 random numbers, in chunks of 100.
var sequence = Lazy.generate(Math.random)
  .chunk(100)
  .async()
  .take(1000);

// Reduce-style operations -- i.e., operations that return a *value* (as
// opposed to a *sequence*) -- return an AsyncHandle for async sequences.
var handle = sequence.toArray();

handle.onComplete(function(array) {
  // Do something w/ 1,000-element array.
});

// Since an AsyncHandle is a promise, you can also use it to create
// subsequent promises using `then` (see the Promises/A+ spec for more
// info).
var flattened = handle.then(function(array) {
  return Lazy(array).flatten();
});

AsyncHandle.onComplete = function(callback) { /*...*/ }
AsyncHandle.onError = function(callback) { /*...*/ }
// cancel