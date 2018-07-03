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
var Person = /** @class */ (function () {
    /**
     *
     */
    function Person(name, username) {
        this.username = username;
        this.weight = 0;
        this.name = name;
        this.type = "Idiot";
    }
    Person.prototype.printWeight = function () {
        console.log(this.weight);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Garg", "gg");
person.printWeight();
person.setType("Mo Rahn");
console.log(person);
// Inheritance
var Gregg = /** @class */ (function (_super) {
    __extends(Gregg, _super);
    /**
     *
     */
    function Gregg() {
        var _this = this;
        var name = "Gregg";
        var type = "blah";
        _this = _super.call(this, name, type) || this;
        return _this;
    }
    return Gregg;
}(Person));
var gregg = new Gregg();
console.log(gregg);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.species = "Long snake";
console.log(plant.species);
console.log(plant.species);
// Static properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCirc = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCirc(3));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 0;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        //throw new Error("Method not implemented.");
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProj = new ITProject();
console.info(newProj);
// Private Constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The only one!");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let wrong = new OnlyOne("The Only One");// compiler error
var right = OnlyOne.getInstance();
console.log(right.name);
//right.name = "Something else";// compiler error
//# sourceMappingURL=classes.js.map