"use strict";
/**
 * implicit typing
 */
// string
var myName = "Max";
myName = "Garg";
//myName = 123;// compiler error
// number
var myAge = 27;
//myAge = "Old";// compiler error
myAge = 27.5;
// boolean
var hasHobbies = true;
hasHobbies = false;
//hasHobbies = 1;// compiler error
/**
 * Explicit Typing
 */
var myRealAge;
myRealAge = 27;
//myRealAge = "2";
// array
var hobbies = ["Cooking", "Soports"];
hobbies = [100];
//hobbies = 100;// compiler error
// tuples
var address = ["Street", 99];
//let addr: [string, number] = [99, "Street"];// compiler error
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 100] = "Blue";
    Color[Color["Gray"] = 101] = "Gray"; // 101 - continues incrementing from the previously assigned values
})(Color || (Color = {}));
var myColor = Color.Gray;
console.log(myColor);
// any
var car = "BMW";
car = {
    brand: "BMW",
    series: 3
};
// functions
function returnMyName() {
    //return myAge;// compiler error
    return myName;
}
console.log(returnMyName());
function sayHello() {
    //return 0;// compiler error
    console.log("Void function");
}
// arguments
function multiply(val1, val2) {
    return val1 * val2;
}
//console.log(multiply(2, "2"));// compiler error
console.log(multiply(2, 2));
// function types
var myMultiply;
//myMultiply = sayHello();// compiler error
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 10));
// objects
var userData = {
    name: "Max",
    age: 8
};
userData = {
    // a: "",// compiler error
    // b: 0// compiler error
    name: "Blah",
    age: 0
};
// complex object
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 1, 2],
    output: function (all) {
        return this.data;
    }
};
// union types
// let myReallyRealAge: any = 27;
// myReallyRealAge = "27";
var myReallyRealAge = 27;
myReallyRealAge = "27";
//myReallyRealAge = false;// compiler error
// checking types
var finalValue = "String";
if (typeof (finalValue == "string")) {
    console.info("Final value is a string");
}
// never --------------------------------- ?
function neverReturns() {
    throw new Error("Err");
}
// nullable types
var canBeNull = 12;
//canBeNull = null;// complier error
canBeNull = null;
var canAlsoBeNull; // undefined by default
canAlsoBeNull = null;
