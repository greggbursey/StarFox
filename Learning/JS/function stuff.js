




// Two different ways of defining functions
//

// C-style way of defining functions
function testFunc () {

}

// Variable assignment way of defining functions
var testFunc = function () {

}


// They both do basically the same thing. But the variable assignment style lets you do something extra.

// You cannot do this:

function Buxton.testFunc () {

}

// But you can do this:

Buxton.testFunc = function () {

}
