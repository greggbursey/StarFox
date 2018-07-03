// Exercise 1 - How was your TypeScript Class?
class Car {
    /**
     *
     */
    constructor(name: string) {
        this._name = name;
    }

    _name: string;

    private _acceleration: number = 0;

    honk() {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number) {
        this._acceleration = this._acceleration + speed;
    }

    get excceleration() {
        return this._acceleration;
    }
}

let carr = new Car("BMW");
carr.honk();
console.log(carr.excceleration);
carr.accelerate(10);
console.log(carr.excceleration);

// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    width: number = 0;
    length: number = 0;
};
class Rectangle extends BaseObject {
    width: number = 5;
    length: number = 2;

    calcSize(): number {
        return this.width * this.length;
    }
}
const rect = new Rectangle();
rect.width = 5;
rect.length = 10;
console.log(rect.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Personz {
    private _firstName: string = "";
    get firstName() {
        return this._firstName;
    }
    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
    }
}
const personz = new Personz();
personz.firstName = "Blahha";
console.log(personz.firstName);
personz.firstName = "Ma";
console.log(personz.firstName);
personz.firstName = "Maximilian";
console.log(personz.firstName);