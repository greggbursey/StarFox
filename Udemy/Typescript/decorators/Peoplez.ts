@logged
class Peoplez {
    /**
     *
     */
    constructor() {
        console.log("High");
    }
}

//@logging(true)
class Peeps {
    /**
     *
     */
    constructor() {
        console.log("High");
    }
}

@printable
@logged
class Bank {
    name = "Boots";
}
const bank = new Bank();
(<any>bank).print();

// Method decorators
// Property decorators
function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        target.writable = false;
        propName;
        descriptor.writable = value;
    }
}
function overwritable(val: boolean) {
    return function (target: any, propName: string): any {
        const newDescription: PropertyDescriptor = {
            writable: val
        }
        target;
        propName;
        return newDescription;
    }
}

class Projekt {
    @overwritable(false)
    projectName: string = "";
    /**
     *
     */
    constructor(name: string) {
        this.projectName = name;
    }
    @editable(false)
    calcBudget() {
        console.log(1006);
    }
}
const proj = new Projekt("Superr");
proj.calcBudget();
proj.calcBudget = function () {
    alert("WHat?");
}
proj.calcBudget();

// Parameter Decorators
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.info("Target: ", target);
    console.info("Method: ", methodName);
    console.info("ParamIndex: ", paramIndex);
}
class Course {
    name: string;
    /**
     *
     */
    constructor(name: string) {
        this.name = name;
    }
    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        mode;
        if (printAll) {
            console.log(1432);
        } else {
            console.log(2);
        }
    }
}
const course = new Course("Cheese");
course.printStudentNumbers("cheese", false);