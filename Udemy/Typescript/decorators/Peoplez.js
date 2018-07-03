"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Peoplez = /** @class */ (function () {
    /**
     *
     */
    function Peoplez() {
        console.log("High");
    }
    Peoplez = __decorate([
        logged
    ], Peoplez);
    return Peoplez;
}());
//@logging(true)
var Peeps = /** @class */ (function () {
    /**
     *
     */
    function Peeps() {
        console.log("High");
    }
    return Peeps;
}());
var Bank = /** @class */ (function () {
    function Bank() {
        this.name = "Boots";
    }
    Bank = __decorate([
        printable,
        logged
    ], Bank);
    return Bank;
}());
var bank = new Bank();
bank.print();
// Method decorators
function editable(value) {
    return function (target, propName, descriptor) {
        target.writable = false;
        propName;
        descriptor.writable = value;
    };
}
var Projekt = /** @class */ (function () {
    /**
     *
     */
    function Projekt(name) {
        this.projectName = "";
        this.projectName = name;
    }
    Projekt.prototype.calcBudget = function () {
        console.log(1006);
    };
    __decorate([
        editable(false)
    ], Projekt.prototype, "calcBudget", null);
    return Projekt;
}());
var proj = new Projekt("Superr");
proj.calcBudget();
proj.calcBudget = function () {
    alert("WHat?");
};
proj.calcBudget();
//# sourceMappingURL=Peoplez.js.map