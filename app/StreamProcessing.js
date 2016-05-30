var Lazy = require('lazy.js')

// 流处理
Lazy(stream)
  .take(5) // Read just the first 5 chunks of data read into the buffer.
  .each(processData);

// Read the first 5 lines from a file:
Lazy.readFile("path/to/file")
  .lines()
  .take(5)
  .each(doSomething);

// Read lines 5-10 from an HTTP response.
Lazy.makeHttpRequest("http://example.com")
  .lines()
  .drop(5)
  .take(5)
  .each(doSomething);
