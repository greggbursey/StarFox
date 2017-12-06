/*
types
*/

//--strings
let myName = "Boo";
//myName = 28;

//--numbers
let myAge = 27.5;
//myAge = "asdf";

//--booleans
let hasHobbies: boolean = true;
//hasHobbies = 1;

//--any
let myRealAge;//--treated as type any
myRealAge = 27;
myRealAge = '27';
let myFakeAge: number;
myFakeAge = 0;
//myFakeAge = "";

//--arrays
let hobbies: any = ["cooking", "cleaning"];
//console.log(hobbies[0]);
//console.log(typeof hobbies);
//hobbies = 100;
hobbies = ["Nothing", 500];

//--tuples
let address: [string, number] = ["Super street", 99];
//let address2: [string, number] = [99, "Super street"];//--error

//--enums
enum Color {
    gray,//--0
    green = 100,//--100
    blue = 2,//--2
    black//3
}
let myColor: Color = Color.blue;
console.log(myColor);

//--any - should be avoided if possible to keep typing
let car: any = "BMW";
console.log(car);
car = {
    brand: "BMW",
    series: 3
}
console.log(car);

//--functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

//--void
function sayHello(): void {
    console.log("Hello");
}

//--argument types
function multiply(val1: number, val2: number): number {
    return val2 * val2;
}
console.log(multiply(5, 5));
//console.log(multiply(5, "10"));//--error

//--function types
let myMultiply: (a: number, b: number) => number;
//myMultiply = sayHello;//--error
//myMultiply();//--error
myMultiply = multiply;
console.log(myMultiply(5, 10));

//--objects
let userData: { name: string, age: number } = {
    name: "max",
    age: 27
};
//userData = 1;//--error
//userData = {//--error
//    a: "hello",
//    b: 22
//}
userData = {
    name: "Charlie",
    age: 0
}

//--complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};
//complex = {};//--error

//--type alias
type Complex = { data: number[], output: (all: boolean) => number[] };
let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

//--union types
let myRealRealAge: number | string = 1987;
//let myRealRealAge: number | string = true;//--error

//--check types
let finalValue: number = 30;
if (typeof finalValue == "number") {
    console.log("Final Value is a number")
}

//--never type - never returns anything (not to be confused with void)
function neverReturns():never {
    throw new Error("An Error");
}

//--nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;//--undefined by default
canAlsoBeNull = null;
let canThisBeAny = null;//--default type of 'any'
canThisBeAny = 12;