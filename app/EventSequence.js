var Lazy = require('lazy.js')

// 事件序列
// First we define our "sequence" of events.
var mouseEvents = Lazy(sourceElement).on("mousemove");

// Map the Event objects to their coordinates, relative to the element.
var coordinates = mouseEvents.map(function(e) {
  var elementRect = sourceElement.getBoundingClientRect();
  return [
    Math.floor(e.clientX - elementRect.left),
    Math.floor(e.clientY - elementRect.top)
  ];
});

// For mouse events on one side of the element, display the coordinates in one place.
coordinates
  .filter(function(pos) { return pos[0] < sourceElement.clientWidth / 2; })
  .each(function(pos) { displayCoordinates(leftElement, pos); });

// For those on the other side, display them in a different place.
coordinates
  .filter(function(pos) { return pos[0] > sourceElement.clientWidth / 2; })
  .each(function(pos) { displayCoordinates(rightElement, pos); });
