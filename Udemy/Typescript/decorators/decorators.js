"use strict";
function logged(constructorFunction) {
    console.log(constructorFunction);
}
// Factory
function logging(value) {
    return value ? logged : null;
}
// Advanced
function printable(constructorFunction) {
    constructorFunction.prototype.print = function () {
        console.log(this);
    };
}
//# sourceMappingURL=decorators.js.map