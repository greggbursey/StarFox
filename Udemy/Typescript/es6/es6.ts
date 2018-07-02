// let & const
/**
 * let creates a block scope variable (contained in the block where it is defined)
 * var creates a global scope variable
 */
let variable = "test";

const maxLevels = 100;
//maxLevels = 99;// compiler error

// block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// arrow functions
const addNumbers = function (num1: number, num2: number): number {
    return num1 + num2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (num1: number, num2: number) => num1 * num2;

const greet = () => console.log("Hello");
greet();

const greetFriend = (friend: string): void => console.log(friend);

const countdown = (start: number = 10): void => {
    while (start > 0) {
        start--;
        console.log(start);
    }
    console.log("Done", start);
};
countdown();

// REST
function makeArray(...args: number[]): number[] {
    return args;
}

// SPREAD
const numbers = [1, 20, 88, 5196];
console.log(Math.max(...numbers));

// destructuring arrays
const myHobbies = ["Cookies", "Cooks"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
// console.info(myHobbies[0]);
// console.info(myHobbies[1]);
const [hob1, hob2] = myHobbies;
console.info(hob1, hob2);

// destructuring objects
const userData2 = {
    uName: "Gregg",
    age: 0
};
//console.log(userData2.uName, userData2.age);
const { uName, age } = userData2;
console.log(uName, age);

// templae literals
const uuName = "GGGArrrg";
//const greeting = "Hello I'm " + uuName;
const greeting = `
This is a great heading's dog.

I'm ${uuName}, this it's cool!
`;
console.log(greeting);