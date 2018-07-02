// Exercise 1 - Maybe use an Arrow Function?
const double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
const greet2 = function (name = "Garg"): void {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greet2();
greet2("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
const numz = [-3, 33, 38, 5];
//console.log(Math.min.apply(Math, numbers));
console.log(Math.min(...numz));

// Exercise 4 - I have to think about Exercise 3 ...
let newArray = [55, 20];
//Array.prototype.push.apply(newArray, numbers);
newArray.push(...numz);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
let testResults = [3.89, 2.99, 1.38];
// let result1 = testResults[0];
// let result2 = testResults[1];
// let result3 = testResults[2];
// console.log(result1, result2, result3);
const [res1, res2, res3] = testResults;
console.log(res1, res2, res3);

// Exercise 6 - And a well-constructed object!
let scientist = { firstName: "Will", experience: 12 };
// let firstName = scientist.firstName;
// let experience = scientist.experience;
// console.log(firstName, experience);
const { firstName, experience } = scientist;
console.log(firstName, experience);