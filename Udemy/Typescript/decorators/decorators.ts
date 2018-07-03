function logged(constructorFunction: Function): void {
    console.log(constructorFunction);
}

// Factory
function logging(value: boolean) {
    return value ? logged : null;
}

// Advanced
function printable(constructorFunction: Function) {
    constructorFunction.prototype.print = function () {
        console.log(this);
    }
}