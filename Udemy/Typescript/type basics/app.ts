/**
 * implicit typing
 */

// string
let myName = "Max";
myName = "Garg";
//myName = 123;// compiler error

// number
let myAge = 27;
//myAge = "Old";// compiler error
myAge = 27.5;

// boolean
let hasHobbies = true;
hasHobbies = false;
//hasHobbies = 1;// compiler error

/**
 * Explicit Typing
 */
let myRealAge: number;
myRealAge = 27;
//myRealAge = "2";

// array
let hobbies: any[] = ["Cooking", "Soports"];
hobbies = [100];
//hobbies = 100;// compiler error

// tuples
let address: [string, number] = ["Street", 99];
//let addr: [string, number] = [99, "Street"];// compiler error

// enums
enum Color {
    Red,// 0
    Blue = 100,// 100
    Gray// 101 - continues incrementing from the previously assigned values
}
let myColor: Color = Color.Gray;
console.log(myColor);

// any
let car: any = "BMW";
car = {
    brand: "BMW",
    series: 3
}

// functions
function returnMyName(): string {// type referes to the RETURN value (not argument value)
    //return myAge;// compiler error
    return myName;
}
console.log(returnMyName());

function sayHello(): void {
    //return 0;// compiler error
    console.log("Void function");
}

// arguments
function multiply(val1: number, val2: number): number {
    return val1 * val2;
}
//console.log(multiply(2, "2"));// compiler error
console.log(multiply(2, 2));

// function types
let myMultiply: (val1: number, val2: number) => number;
//myMultiply = sayHello();// compiler error
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 10));

// objects
let userData: { name: string, age: number } = {
    name: "Max",
    age: 8
};
userData = {
    // a: "",// compiler error
    // b: 0// compiler error
    name: "Blah",
    age: 0
};

// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };// this is a type creation - not an object creation

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [1, 2, 3],
    output: function (): number[] {
        return this.data;
    }
};
let complex2: Complex = {
    data: [100, 1, 2],
    output: function (): number[] {
        return this.data;
    }
};

// union types
// let myReallyRealAge: any = 27;
// myReallyRealAge = "27";
let myReallyRealAge: number | string = 27;
myReallyRealAge = "27";
//myReallyRealAge = false;// compiler error

// checking types
let finalValue = "String";
if (typeof (finalValue == "string")) {
    console.info("Final value is a string");
}

// never --------------------------------- ?
function neverReturns(): never {
    throw new Error("Err");
}

// nullable types
let canBeNull: number | null = 12;
//canBeNull = null;// complier error
canBeNull = null;
let canAlsoBeNull;// undefined by default
canAlsoBeNull = null;

function controlMe(isTrue: boolean) {

    let result: number | undefined;

    if (isTrue) {
        result = 12;
    }

    if (result == undefined) {
        result = 33;
    }

    return result;
}