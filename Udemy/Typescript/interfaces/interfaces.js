"use strict";
function greetz(person) {
    console.log("Hi " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person1 = {
    firstName: "Garg",
    age: 123,
    greet: function (lastName) {
        console.warn("HI I am " + lastName);
    }
};
greetz(person1);
// greetz({
//     firstName: "Bah",
//     //age: 5161
// });
person1.greet("Bones");
changeName(person1);
var Person2 = /** @class */ (function () {
    function Person2() {
        this.firstName = "";
    }
    Person2.prototype.greet = function () {
        throw new Error("Method not implemented.");
    };
    return Person2;
}());
var myPerson = new Person2();
myPerson.firstName = "asdf";
myPerson.lastName = "asdf";
myPerson.greet();
var myDoubleFunction;
myDoubleFunction = function (val1, val2) {
    return (val1 + val2) * 2;
};
console.log(myDoubleFunction(30, 6));
var oldPerson = {
    age: 27,
    firstName: "blah",
    greet: function () {
        console.log("BAH");
    }
};
//# sourceMappingURL=interfaces.js.map