"use strict";
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item; // will overwrite
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("asdf", 10);
numberMap.setItem("asdfsdafsdaadsfsdf", 100);
numberMap.getItem("asdf");
numberMap.printMap();
numberMap.clear();
var stringMap = new MyMap();
stringMap.setItem("asdf", "10");
stringMap.setItem("asdfsdafsdaadsfsdf", "100");
stringMap.getItem("asdf");
stringMap.printMap();
stringMap.clear();
//# sourceMappingURL=exercise.js.map