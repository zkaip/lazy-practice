var Lazy = require('lazy.js')

var factory = Lazy.createWrapper(function (eventSource) {
  var sequence = this
  eventSource.handleEvent(function(data){
    sequence.emit(data)
  })
})

var eventEmitter = {
  triggerEvent: function (data) {
    eventEmitter.eventHandler(data)
  },
  handleEvent: function (handler) {
    eventEmitter.eventHandler = handler
  },
  eventHandler: function () {
    
  }
}
var events = []
factory(eventEmitter).each((e) => events.push(e))

eventEmitter.triggerEvent('foo');
eventEmitter.triggerEvent('bar');

console.log(events) // [ 'foo', 'bar' ]