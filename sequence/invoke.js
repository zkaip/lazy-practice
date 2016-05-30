var Lazy = require('lazy.js')

function Person(first, last) {
  this.fullName = function fullName() {
    return first + " " + last;
  };
}

var people = [
  new Person("Dan", "Tao"),
  new Person("Bob", "Smith")
];
// 创建一个sequence元素, 由函数计算出来, 作用于每一个元素
Lazy(people).invoke("fullName") // sequence: ["Dan Tao", "Bob Smith"]