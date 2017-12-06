/*
Interfaces do not get compiled into the .js file.
They are only used for error checking in the .ts file
*/

interface NamedPerson {
    firstName: string;
    age?: number;//--? means optional
    [propName: string]: any;//--don't know the name of the key or type of the value
    greetMe(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const person: NamedPerson = {
    firstName: "Gregg",
    age: 32,
    hobbies: ["Slashing", "Sports"],
    greetMe(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};

//greet({ firstName: "Max", age: 27 });
//greet({ firstName: "Moofassuh" });
greet(person);
changeName(person);
greet(person);
person.greetMe("Bird droppings");

class Person implements NamedPerson {
    firstName: string;
    lastName: string;
    greetMe(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}

const myPerson = new Person();
myPerson.firstName = "Moohoo";
myPerson.lastName = "X";
greet(myPerson);
myPerson.greetMe(myPerson.lastName);

//--Function Types
interface DoubleValue {
    (number1: number, number2: number): number;//--
}
let myDoubFunction: DoubleValue;
myDoubFunction = function (val1: number, val2: number) {
    return (val1 + val2) * 2;
}
console.log(myDoubFunction(10, 20));

// Interface Inheritance
interface AgedPerson extends NamedPerson {
    age: number;
}
const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Boohal",
    greetMe(lastName: string) {
        console.log("HALLLO " + this.firstName + " " + lastName);
    }
}
console.log(oldPerson.greetMe("Apples"));