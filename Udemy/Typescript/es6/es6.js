"use strict";
// let & const
/**
 * let creates a block scope variable (contained in the block where it is defined)
 * var creates a global scope variable
 */
var variable = "test";
var maxLevels = 100;
//maxLevels = 99;// compiler error
// block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// arrow functions
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (num1, num2) { return num1 * num2; };
var greet = function () { return console.log("Hello"); };
greet();
var greetFriend = function (friend) { return console.log(friend); };
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
        console.log(start);
    }
    console.log("Done", start);
};
countdown();
// REST
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
// SPREAD
var numbers = [1, 20, 88, 5196];
console.log(Math.max.apply(Math, numbers));
// destructuring arrays
var myHobbies = ["Cookies", "Cooks"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
// console.info(myHobbies[0]);
// console.info(myHobbies[1]);
var hob1 = myHobbies[0], hob2 = myHobbies[1];
console.info(hob1, hob2);
// destructuring objects
var userData2 = {
    uName: "Gregg",
    age: 0
};
//console.log(userData2.uName, userData2.age);
var uName = userData2.uName, age = userData2.age;
console.log(uName, age);
// templae literals
var uuName = "GGGArrrg";
//const greeting = "Hello I'm " + uuName;
var greeting = "\nThis is a great heading's dog.\n\nI'm " + uuName + ", this it's cool!\n";
console.log(greeting);
//# sourceMappingURL=es6.js.map