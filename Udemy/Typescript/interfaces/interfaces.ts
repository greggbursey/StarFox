interface NamedPerson {
    firstName: string;
    age?: number;// optional property
    [propName: string]: any;// dont' know name of key or type
    greet(lastName: string): void;
}

function greetz(person: NamedPerson) {
    console.log("Hi " + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const person1 = {
    firstName: "Garg",
    age: 123,
    greet(lastName: string) {
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

class Person2 implements NamedPerson {
    [propName: string]: any;
    firstName: string = "";
    age?: number | undefined;
    greet(): void {
        throw new Error("Method not implemented.");
    }
}
const myPerson = new Person2();
myPerson.firstName = "asdf";
myPerson.lastName = "asdf";
myPerson.greet();

interface DoubleValueFunction {
    (num1: number, num2: number): number;
}
let myDoubleFunction: DoubleValueFunction;
myDoubleFunction = function (val1: number, val2: number) {
    return (val1 + val2) * 2;
}
console.log(myDoubleFunction(30, 6));

interface AgedPerson extends NamedPerson {
    age: number;
}
const oldPerson: AgedPerson = {
    age: 27,
    firstName: "blah",
    greet() {
        console.log("BAH")
    }
}