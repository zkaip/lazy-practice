var Lazy = require('lazy.js')

function population(country) {
  return country.pop;
}

function area(country) {
  return country.sqkm;
}

var countries = [
  { name: "USA", pop: 320000000, sqkm: 9600000 },
  { name: "Brazil", pop: 194000000, sqkm: 8500000 },
  { name: "Nigeria", pop: 174000000, sqkm: 924000 },
  { name: "China", pop: 1350000000, sqkm: 9700000 },
  { name: "Russia", pop: 143000000, sqkm: 17000000 },
  { name: "Australia", pop: 23000000, sqkm: 7700000 }
];

Lazy(countries).sortBy(population).last(3).pluck('name') // sequence: ["Brazil", "USA", "China"]
Lazy(countries).sortBy(area).last(3).pluck('name')       // sequence: ["USA", "China", "Russia"]
Lazy(countries).sortBy(area, true).first(3).pluck('name') // sequence: ["Russia", "China", "USA"]
