"use strict";
/*
Interfaces do not get compiled into the .js file.
They are only used for error checking in the .ts file
*/
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: "Gregg",
    age: 32,
    hobbies: ["Slashing", "Sports"],
    greetMe: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
//greet({ firstName: "Max", age: 27 });
//greet({ firstName: "Moofassuh" });
greet(person);
changeName(person);
greet(person);
person.greetMe("Bird droppings");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greetMe = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Moohoo";
myPerson.lastName = "X";
greet(myPerson);
myPerson.greetMe(myPerson.lastName);
var myDoubFunction;
myDoubFunction = function (val1, val2) {
    return (val1 + val2) * 2;
};
console.log(myDoubFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Boohal",
    greetMe: function (lastName) {
        console.log("HALLLO " + this.firstName + " " + lastName);
    }
};
console.log(oldPerson.greetMe("Apples"));
