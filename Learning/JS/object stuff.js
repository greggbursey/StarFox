// An object is basically like a dictionary. For every "word", 
// there is a "definition" assigned to it.
// "Words" are ALWAYS strings. The definition can be anything.
// An object is defined using curly braces {}.

// An empty object
var myObject = {};

// ADDING TO AN OBJECT
    // You can assign something do an object using the dot notation:
    myObject.aardvark = "a weird animal that eats ants";

    // aardvark is called a PROPERTY of the object. 
    // The property's name is "aardvark", and the property's value 
    // is "a weird animal that eats ants".

    // You can retrieve a property's value using the dot notation:
    console.log(myObject.aardvark); // Outputs "a weird animal that eats ants"

    // You can also retrieve a property's value by passing the 
    // property name using bracket notation:
    console.log(myObject["aardvark"]); // Outputs "a weird animal that eats ants"

    // You can also assign something to an object by passing the 
    // property name using bracket notation:
    myObject["anteater"] = "alternate name for aardvark";

    console.log(myObject["anteater"]); // Outputs "alternate name for aardvark"

    // You can use either dot notation or bracket notation to 
    // assign or retrieve a property. 
    
// OBJECT LITERALS
    // You can also define an object using the "object literal notation":
    var myObject2 = {
        "first name": "Bob",
        "last name": "Smith",
        "address": "not telling"
    };

    console.log(myObject2.address); // Outputs "not telling"
    console.log(myObject2.first name); // ERROR! If a property name has characters in it
        // that make it an invalid variable name, like space, #, etc, you must use
        // the bracket notation to access it:
    console.log(myObject2["first name"]); // Outputs "Bob"

// PROPERTY TYPES
    // The property NAME is always a string, but the property VALUE can be anything.
    // It could be a number:
    myObject.numberOfAardvarks = 3;

    console.log(myObject["numberOfAardvarks"]); // Outputs 3

    // It could be an array:
    myObject.antsInTheSand = ["Bob", "Bill", "Ferguson"];

    console.log(myObject["antsInTheSand"]); // Outputs the array

    // It could be a function:
    myObject.eatTheAnts = function () {
        console.log("eating ants...");
    };

    console.log(myObjects["eatTheAnts"]); // Dumps function definition

    myObject["eatTheAnts"](); // Displays "eating ants..."

    // Don't forget we can use dot notation instead:
    myObject.eatTheAnts(); // Displays "eating ants..."

    // A property value can even be another object:
    myObject.stats = {
        "height": 12,
        "weight": 60
    };
    console.log(myObject.stats); // Outputs the object

    // Since properties can be objects, we can end up with more than one dot:
    console.log(myObjects.stats.height); // Outputs 12

    // We take advantage of this feature to create "namespaces" -- a basic way
    // to organize our code.
    //
    // They aren't "real" namespaces, but objects in JavaScript are very flexible --
    // they let you do all kinds of things with them.
    //
    // One reason we use objects to organize our code into "namespaces" is to avoid
    // "polluting the global namespace".
     
// NAMESPACES AND SCOPE
    // If you define a variable inside of a function:

    function wrapper () {
        var myVar = 3;
    }

    // That variable cannot be accessed outside of the function:
    console.log(myVar); // Fails because myVar is not defined

    // This is good because myVar is probably only relevant inside of the "wrapper"
    // function and shouldn't be seen elsewhere.

    // But if a variable gets defined outside of a function, it will be put
    // into the "global namespace":
    var height = 234;

    // And it can be seen anywhere from inside the application.
    // This can potentially cause naming conflicts.
    //
    // For example, say we had a script on our site that creates a dialog box,
    // and uses a function getHeight to calculate the height of the box:

    // dialogbox.js
    function createDialogBox () {
        getHeight();
        // do other stuff
    }

    function getHeight () {}

    // Well what if we also had a script that creates a list box, and happens to
    // use its OWN function getHeight to calculate the height of ITS box?

    // listbox.js
    function createListBox () {
        getHeight();
        // do other stuff
    }

    function getHeight () {}

    // If both scripts were included on the same page, whichever one was included last,
    // that script's version of getHeight would overwrite the original one, and one of
    // the scripts would work incorrectly.
    //
    // Imagine if we did this instead:

    // dialogbox.js
    var dialogBox = {
        createDialogBox = function () {
            dialogBox.getHeight();
            // do other stuff
        },
        getHeight: function () {

        }
    };

    // listbox.js
    var listBox = {
        createListBox = function () {
            listBox.getHeight();
            // do other stuff
        },
        getHeight: function () {

        }
    };

    // Now, nothing gets overwritten. Everything that dialogbox needs is self-contained
    // within the dialogBox object, and everything that listbox needs is self-contained
    // within the listBox object.
    //
    // Notice that we need to explicitly reference dialogBox.getHeight() instead of
    // just getHeight(). That meeans that we are accessing the getHeight property that
    // is assigned to the dialogBox object.




