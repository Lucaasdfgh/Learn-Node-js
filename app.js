function sayName(name){
    console.log("hello " + name);
}
sayName("lucas")

console.log() //global object
// setInterval(2) //global

//creating modules

//loading module
const logi = require("./logger")
console.log(logi.sayOne(1,2,4))

