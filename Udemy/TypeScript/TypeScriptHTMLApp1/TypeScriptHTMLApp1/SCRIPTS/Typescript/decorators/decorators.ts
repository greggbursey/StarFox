/*
 * Decorators - function attached to something with the @ sign
 */
function logged(constructorFn: Function): void {
    console.log(constructorFn);
}
@logged
class GreatPerson {
    constructor() {
        console.log("HI");
    }
}
/*
 * Factory
 */
function logging(value: boolean): any {
    return value ? logged : null;
}
@logging(true)
class Car {

}
/*
 * Advanced
 */
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}
@logging(true)
@printable
class Plant {
    name = "Green Boi";
}
const plant = new Plant();
(<any>plant).print();
/*
 * Method / Property Decorator
 */
function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}
function overwritable(value: boolean) {
    return function (target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}
class Project {
    @overwritable(true)
    projectName: string;
    constructor(name: string) {
        this.projectName = name;
    }
    @editable(true)
    calcBudget() {
        console.log(1000);
    }
}
const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
}
project.calcBudget();
/*
 * Parameter Decorators
 */
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("Method Name: ", methodName);
    console.log("Parameter Index: ", paramIndex);
}
class Course {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(10);
        }
    }
}
const course = new Course("Great");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);