
// Working with Arrays
// Part 1: Adding and Updating array elements


// Arrays are just lists.
// If you put them in an Excel spreadsheet, they might look like this:
//
// 0    Raphael
// 1    Leonardo
// 2    Michaelangelo
// 3    Donatello
// 4    Splinter
//


// We might define that array like this:
//

var ninjas = [
    "Raphael",
    "Leonardo",
    "Michaelangelo",
    "Donatello",
    "Splinter"
];
console.log(ninjas); // ["Raphael", "Leonardo", "Michaelangelo", "Donatello", "Splinter"]


// The number shown above is called the INDEX. You can get an item in the array
// using its INDEX:
//

console.log(ninjas[3]); // "Donatello"
console.log(ninjas[0]); // "Raphael"

// We can find the total number of elements in the array:

console.log(ninjas.length); // 5

// We can also build an array one element at a time. First declare an empty array:
var ninjas = [];

// Then push() items onto the end, one by one:
ninjas.push("Raphael"); // Length of array is now 1, and Raphael is at index 0
console.log(ninjas); // ["Raphael"]
console.log(ninjas[0]); // "Raphael"
console.log(ninjas.length); // 1

ninjas.push("Leonardo"); // Length of array is now 2, and Leonardo is at index 1
console.log(ninjas); // ["Raphael", "Leonardo"]
console.log(ninjas[1]); // "Leonardo"
console.log(ninjas.length); // 2

ninjas.push("Michaelangelo"); // Length of array is now 3, and Michaelangelo is at index 2
console.log(ninjas); // ["Raphael", "Leonardo", "Michaelangelo"]
console.log(ninjas[2]); // "Michaelangelo"
console.log(ninjas.length); // 3

ninjas.push("Donatello"); // Length of array is now 4, and Donatello is at index 3
console.log(ninjas); // ["Raphael", "Leonardo", "Michaelangelo", "Donatello"]
console.log(ninjas[3]); // "Donatello"
console.log(ninjas.length); // 4

ninjas.push("Splinter"); // Length of array is now 5, and Splinter is at index 4
console.log(ninjas); // ["Raphael", "Leonardo", "Michaelangelo", "Donatello", "Splinter"]
console.log(ninjas[4]); // "Splinter"
console.log(ninjas.length); // 5


// We can also change individual array elements without changing the rest of the array:

ninjas[3] = "Bo-staff";
console.log(ninjas); // ["Raphael", "Leonardo", "Michaelangelo", "Bo-staff", "Splinter"]
console.log(ninjas[3]); // "Bo-staff"
console.log(ninjas[4]); // Still "Splinter"
console.log(ninjas.length); // Still 5

// The length of the array changes every time we add something to it:

ninjas.push("Donatello");
console.log(ninjas); // ["Raphael", "Leonardo", "Michaelangelo", "Bo-staff", "Splinter", "Donatello"]
console.log(ninjas.length); // 6

// The .push() method always puts items at the END of the array.
// We know the last item's index is one less than the length.
// Therefore we can get the index of the last added item like this:

var numberOfItems = ninjas.length;
var lastIndex = numberOfItems - 1;
var lastAddedItem = ninjas[lastIndex];
console.log(lastAddedItem); // "Donatello"

// We could also squash these all together:

console.log(ninjas[ninjas.length - 1]); // "Donatello"

// We can set an item at any index we want:
ninjas[100] = "Whoah nelly";
console.log(ninjas); /*
                        0: "Raphael", 
                        1: "Leonardo", 
                        2: "Michaelangelo", 
                        3: "Bo-staff", 
                        4: "Splinter", 
                        5: "Donatello", 

// The number is called the INDEX. You can get an item in the array
// using its INDEX:
//

console.log(ninjas[3]); // "Donatello"
                        100: "Whoah nelly"
    */
console.log(ninjas.length); // 101
console.log(ninjas[100]); // "Whoah nelly"

// Note there are only 7 elements in the array, but JavaScript considers there to be 101.
// It ignores all the empty space and assumes the length to be one greater than the last
// element.

// Arrays work well with for loops.

for ( var i = 0; i < 5; i++) {
    ninjas[i] = ninjas[i] + " is a ninja";
}
console.log(ninjas); /* 
                        0: "Raphael is a ninja", 
                        1: "Leonardo is a ninja", 
                        2: "Michaelangelo is a ninja", 
                        3: "Bo-staff is a ninja", 
                        4: "Splinter is a ninja", 
                        5: "Donatello is a ninja", 
                        100: "Whoah nelly is a ninja"
                        */

// We can check if an array item is equal to something:

console.log(ninjas[0] === "Raphael is a ninja"); // true


// Exercise 1: Write a function "createNinjaArray" that takes several ninja names as arguments,
//      creates an array of ninjas using those names, and returns the array.
//
// Exercise 2: Write a for loop that adds a string to each item of the ninja array. The for loop
//      should be smart enough to go over the entire length of the array and no further.
//
// Exercise 3: Using the for loop from exercise 2, write a function "appendStringToArrayItems" 
//      that takes an array as the first argument, a string as the second argument, and adds 
//      that string to the end of each name in the array.
//
// Exercise 4: Write some usage code that uses the above methods to create an array of the Ninja Turtles'
//      names.
//
// Exercise 5: Write some usage code that uses the array from exercise 4 and appends the string " Turtle" to
//      each array item.
//
// Exercise 6: Write a function "changeNinjaName" that takes an array, an existing ninja's name, 
//      and a new name as arguments. It should find the array item with the given ninja's name, 
//      and change that array item to be the new name.
//
// Exercise 7: Write a different version of "changeNinjaName" -- instead of changing the array items
//      in place, it should create a new array with the new items and return the new array.
//
// Exercise 8: Write a different version of "appendStringToArrayItems" -- instead of changing the
//      array items in place, it should create a new array with the new items and return the new array.
