"use strict";
// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet2 = function (name) {
    if (name === void 0) { name = "Garg"; }
    if (name === undefined) {
        name = "Max";
    }
    console.log("Hello, " + name);
};
greet2();
greet2("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numz = [-3, 33, 38, 5];
//console.log(Math.min.apply(Math, numbers));
console.log(Math.min.apply(Math, numz));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
//Array.prototype.push.apply(newArray, numbers);
newArray.push.apply(newArray, numz);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
// let result1 = testResults[0];
// let result2 = testResults[1];
// let result3 = testResults[2];
// console.log(result1, result2, result3);
var res1 = testResults[0], res2 = testResults[1], res3 = testResults[2];
console.log(res1, res2, res3);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
// let firstName = scientist.firstName;
// let experience = scientist.experience;
// console.log(firstName, experience);
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
//# sourceMappingURL=exercise.js.map