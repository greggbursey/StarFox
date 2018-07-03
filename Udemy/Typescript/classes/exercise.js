"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    /**
     *
     */
    function Car(name) {
        this._acceleration = 0;
        this._name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this._acceleration = this._acceleration + speed;
    };
    Object.defineProperty(Car.prototype, "excceleration", {
        get: function () {
            return this._acceleration;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
var carr = new Car("BMW");
carr.honk();
console.log(carr.excceleration);
carr.accelerate(10);
console.log(carr.excceleration);
// Exercise 2 - Two objects, based on each other ...
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 5;
        _this.length = 2;
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rect = new Rectangle();
rect.width = 5;
rect.length = 10;
console.log(rect.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Personz = /** @class */ (function () {
    function Personz() {
        this._firstName = "";
    }
    Object.defineProperty(Personz.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Personz;
}());
var personz = new Personz();
personz.firstName = "Blahha";
console.log(personz.firstName);
personz.firstName = "Ma";
console.log(personz.firstName);
personz.firstName = "Maximilian";
console.log(personz.firstName);
//# sourceMappingURL=exercise.js.map