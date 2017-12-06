"use strict";
/*
Generics
*/
//--simple generic
function echo(data) {
    return data;
}
//--better generic - <T> makes the function generic, and T can be used as a type
function betterEcho(data) {
    return data;
}
//
console.log(echo("MAX"));
console.log(echo(71));
console.log(echo({ name: "Max", age: 2789 }));
//
console.log(betterEcho("MAX"));
console.log(betterEcho(17));
console.log(betterEcho({ name: "Max", age: 2789 }));
//--built in generics - Array is a generic type by default
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.table(testResults);
/*
arrays
*/
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
/*
generic types
*/
var echo2 = betterEcho;
console.log(echo2("Something"));
/*
generic class
*/
//class SimpleMath<T extends number | string> {
//class SimpleMath<T extends U, U extends number | string> {
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
//const simpleMath = new SimpleMath<number>();
var simpleMath = new SimpleMath();
//simpleMath.baseValue = 11;
//simpleMath.multiplyValue = 2;
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 2;
console.log(simpleMath.calculate());
/*
EXERCISE

Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

*/
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("apples", 10);
numberMap.setItem("pears", 10);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem("apples", '10');
stringMap.setItem("pears", '2');
console.log(stringMap.getItem("apples"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
