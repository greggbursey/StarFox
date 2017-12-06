/*
es6
*/

//--let
let variable = "Test";
console.log(variable);
variable = "0 pigs";
console.log(variable);

//--const
const maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99;//--error

//--block scope
function reset() {
    //console.log(variable);//--error
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

//--arrow functions
const addNumbers = function (num1: number, num2: number): number {
    return num1 + num2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (num1: number, num2: number) => num1 * num2;
console.log(multiplyNumbers(10, 3));

const greetSomeone = () => {
    console.log("I've been greeted");
}
greetSomeone();

const greetFriend = (friend: any) => console.log(friend);
greetFriend("Manu");

//--default parameters
//const countdown = (start: number): void => {
const countdown = (start: number = 10, end: number = start - 5): void => {
    console.log("BEGIN", start);
    while (start > 0) {
        start--;
    }
    console.log("DONE", start);
};
//countdown();//--error
countdown(10);
countdown(20);

//--spread operator
const numbers = [1, 10, 99, -5];
//console.log(Math.max(numbers));//--error
console.log(Math.max(...numbers));//--turn array into a list of numbers

//--rest operator
//function makeArray(arg1: number, arg2: number, arg3: number) {//--cumbersome
function makeArray(name: string, ...args: number[]) {//--whatever args is, turn it into an array
    //return [arg1, arg2, arg3];
    return args;
}
console.log(makeArray("Gblot", 1, 2, 3));

//--destructuring arrays
const myHobbies = ["Cookies", "456"];
//const hob1 = myHobbies[0];
//const hob2 = myHobbies[1];
//console.log(hob1, hob2);
const [hob1, hob2] = myHobbies;
console.log(hob1, hob2);

//--destructuring objects
const userData2 = {
    userName: "Blat",
    age: 964
};
const { userName, age } = userData2;
console.log(userName, age);

//--template literals