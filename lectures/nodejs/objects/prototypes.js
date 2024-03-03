const util = require("util");
let x = {};
let y = [[], []];

// console.log(
//   util.inspect(Object.getPrototypeOf(x), { showHidden: true, depth: null })
// );

console.log(x.toString());
console.log(util.inspect(y.__proto__, { showHidden: true, depth: null }));
