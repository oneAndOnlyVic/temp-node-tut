const names = require("./4-firstModule")
const sayHi = require("./5-secondModule")

sayHi(names.peter);
sayHi(names.john);
sayHi("ada");

console.log(names);