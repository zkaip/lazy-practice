var Lazy = require('lazy.js')
var logger = function (msg) {
  console.log(msg)
}

Lazy.Sequence.define('verbose', {
  init: function(logger) {
    this.logger = logger;
  },
  each: function (fn) {
    var logger = this.logger
    return this.parent.each((e, i) => {
      logger(e)
      return fn(e, i)
    })
  }
})

Lazy([1, 2, 3]).verbose(logger).each(Lazy.noop)