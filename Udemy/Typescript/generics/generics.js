"use strict";
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo("MAX"));
console.log(echo(27));
console.log(echo({
    age: 12,
    name: "Idiot"
}));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("MAX").length);
console.log(betterEcho(27).toString());
console.log(betterEcho({
    age: 12,
    name: "Idiot"
}));
// Built in Generics
var testResults1 = [1, 2];
testResults1.push(-99);
//testResults1.push("asdf");// compiler error
testResults1.push(1.5616516);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["apple", "bananna"]);
// Generic Types
var echo2 = betterEcho;
console.log(echo2("Garg"));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calc = function () {
        if (this.baseVal === undefined || this.multiplyVal === undefined) {
            alert("No");
        }
        else {
            return +this.baseVal * +this.multiplyVal;
        }
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseVal = 15;
simpleMath.multiplyVal = 20;
simpleMath.multiplyVal = "20";
//simpleMath.multiplyVal = "a lot";
console.log(simpleMath.calc());
//# sourceMappingURL=generics.js.map