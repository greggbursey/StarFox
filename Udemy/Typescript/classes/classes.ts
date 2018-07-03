class Person {
    name: string;
    private type: string;
    protected weight: number = 0;

    /**
     *
     */
    constructor(name: string, public username: string) {
        this.name = name;
        this.type = "Idiot";
    }

    printWeight() {
        console.log(this.weight);
    }

    setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Garg", "gg");
person.printWeight();
person.setType("Mo Rahn");
console.log(person);

// Inheritance
class Gregg extends Person {
    /**
     *
     */
    constructor() {

        let name = "Gregg";
        let type = "blah";

        super(name, type);
    }
}
const gregg = new Gregg();
console.log(gregg);

// Getters & Setters
class Plant {
    private _species: string = "";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}
let plant = new Plant();
plant.species = "Long snake";
console.log(plant.species);
console.log(plant.species);

// Static properties & Methods
class Helpers {
    static PI: number = 3.14;
    static calcCirc(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCirc(3));

// Abstract Classes
abstract class Project {// means class needs to be extended
    projectName: string = "Default";
    budget: number = 0;

    abstract changeName(name: string): void;// means, once class is extended, logic for changeName needs to be made

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        //throw new Error("Method not implemented.");
        this.projectName = name;
    }
}
let newProj = new ITProject();
console.info(newProj);

// Private Constructors
class OnlyOne {
    private static instance: OnlyOne;
    private constructor(public readonly name: string) { }

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The only one!");
        }
        return OnlyOne.instance;
    }
}
//let wrong = new OnlyOne("The Only One");// compiler error
let right = OnlyOne.getInstance();
console.log(right.name);
//right.name = "Something else";// compiler error