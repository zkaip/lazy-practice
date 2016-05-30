var Lazy = require('lazy.js')

// ObjectLikeSequence.define = function(methodName, overrides) { /*...*/ }
function downcaseKey(value, key) {
  return [key.toLowerCase(), value];
}

Lazy.ObjectLikeSequence.define("caseInsensitive", {
  init: function() {
    var downcased = this.parent
      .map(downcaseKey)
      .toObject();
    this.downcased = Lazy(downcased);
  },

  get: function(key) {
    return this.downcased.get(key.toLowerCase());
  },

  each: function(fn) {
    return this.downcased.each(fn);
  }
});

Lazy({ Foo: 'bar' }).caseInsensitive()            // sequence: { foo: 'bar' }
Lazy({ FOO: 'bar' }).caseInsensitive().get('foo') // => 'bar'
Lazy({ FOO: 'bar' }).caseInsensitive().get('FOO') // => 'bar'

// ObjectLikeSequence.assign = function(other) { /*...*/ }
Lazy({ "uno": 1, "dos": 2 }).assign({ "tres": 3 }) // sequence: { uno: 1, dos: 2, tres: 3 }
Lazy({ foo: "bar" }).assign({ foo: "baz" });       // sequence: { foo: "baz" }


// ObjectLikeSequence.defaults = function(defaults) { /*...*/ }
Lazy({ name: "Dan" }).defaults({ name: "User", password: "passw0rd" }) // sequence: { name: "Dan", password: "passw0rd" }


// ObjectLikeSequence.functions = function() { /*...*/ }
var dog = {
  name: "Fido",
  breed: "Golden Retriever",
  bark: function() { console.log("Woof!"); },
  wagTail: function() { console.log("TODO: implement robotic dog interface"); }
};

Lazy(dog).functions() // sequence: ["bark", "wagTail"]


// ObjectLikeSequence.get = function(key) { /*...*/ }
Lazy({ foo: "bar" }).get("foo")                          // => "bar"
Lazy({ foo: "bar" }).extend({ foo: "baz" }).get("foo")   // => "baz"
Lazy({ foo: "bar" }).defaults({ bar: "baz" }).get("bar") // => "baz"
Lazy({ foo: "bar" }).invert().get("bar")                 // => "foo"
Lazy({ foo: 1, bar: 2 }).pick(["foo"]).get("foo")        // => 1
Lazy({ foo: 1, bar: 2 }).pick(["foo"]).get("bar")        // => undefined
Lazy({ foo: 1, bar: 2 }).omit(["foo"]).get("bar")        // => 2
Lazy({ foo: 1, bar: 2 }).omit(["foo"]).get("foo")        // => undefined


// ObjectLikeSequence.invert = function() { /*...*/ }
Lazy({ first: "Dan", last: "Tao" }).invert() // sequence: { Dan: "first", Tao: "last" }


// ObjectLikeSequence.keys = function() { /*...*/ }
Lazy({ hello: "hola", goodbye: "hasta luego" }).keys() // sequence: ["hello", "goodbye"]


// ObjectLikeSequence.merge = function(others, mergeFn) { /*...*/ }
var names = {
  'characters': [
    { 'name': 'barney' },
    { 'name': 'fred' }
  ]
};

var ages = {
  'characters': [
    { 'age': 36 },
    { 'age': 40 }
  ]
};

var food = {
  'fruits': ['apple'],
  'vegetables': ['beet']
};

var otherFood = {
  'fruits': ['banana'],
  'vegetables': ['carrot']
};

function mergeArrays(a, b) {
  return Array.isArray(a) ? a.concat(b) : undefined;
}

Lazy(names).merge(ages); // => sequence: { 'characters': [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred', 'age': 40 }] }
Lazy(food).merge(otherFood, mergeArrays); // => sequence: { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }

// merges objects
Lazy({ foo: 1 }).merge({ foo: 2 }); // => sequence: { foo: 2 }
Lazy({ foo: 1 }).merge({ bar: 2 }); // => sequence: { foo: 1, bar: 2 }

// goes deep
Lazy({ foo: { bar: 1 } }).merge({ foo: { bar: 2 } }); // => sequence: { foo: { bar: 2 } }
Lazy({ foo: { bar: 1 } }).merge({ foo: { baz: 2 } }); // => sequence: { foo: { bar: 1, baz: 2 } }
Lazy({ foo: { bar: 1 } }).merge({ foo: { baz: 2 } }); // => sequence: { foo: { bar: 1, baz: 2 } }

// gives precedence to later sources
Lazy({ foo: 1 }).merge({ bar: 2 }, { bar: 3 }); // => sequence: { foo: 1, bar: 3 }

// undefined gets passed over
Lazy({ foo: 1 }).merge({ foo: undefined }); // => sequence: { foo: 1 }

// null doesn't get passed over
Lazy({ foo: 1 }).merge({ foo: null }); // => sequence: { foo: null }

// array contents get merged as well
Lazy({ foo: [{ bar: 1 }] }).merge({ foo: [{ baz: 2 }] }); // => sequence: { foo: [{ bar: 1, baz: 2}] }


// ObjectLikeSequence.omit = function(properties) { /*...*/ }
var players = {
  "who": "first",
  "what": "second",
  "i don't know": "third"
};

Lazy(players).omit(["who", "what"]) // sequence: { "i don't know": "third" }


// ObjectLikeSequence.pairs = function() { /*...*/ }
var colorCodes = {
  red: "#f00",
  green: "#0f0",
  blue: "#00f"
};

Lazy(colorCodes).pairs() // sequence: [["red", "#f00"], ["green", "#0f0"], ["blue", "#00f"]]


// ObjectLikeSequence.pick = function(properties) { /*...*/ }
var players = {
  "who": "first",
  "what": "second",
  "i don't know": "third"
};

Lazy(players).pick(["who", "what"]) // sequence: { who: "first", what: "second" }


// ObjectLikeSequence.toArray = function() { /*...*/ }
var colorCodes = {
  red: "#f00",
  green: "#0f0",
  blue: "#00f"
};

Lazy(colorCodes).toArray() // => [["red", "#f00"], ["green", "#0f0"], ["blue", "#00f"]]


// ObjectLikeSequence.values = function() { /*...*/ }
Lazy({ hello: "hola", goodbye: "hasta luego" }).values() // sequence: ["hola", "hasta luego"]


// ObjectLikeSequence.watch = function(propertyNames) { /*...*/ }
var obj = {},
    changes = [];

Lazy(obj).watch('foo').each(function(change) {
  changes.push(change);
});

obj.foo = 1;
obj.bar = 2;
obj.foo = 3;

obj.foo; // => 3
changes; // => [{ property: 'foo', value: 1 }, { property: 'foo', value: 3 }]





// async throws error
Lazy({ foo: 'bar' }).async() // throws
