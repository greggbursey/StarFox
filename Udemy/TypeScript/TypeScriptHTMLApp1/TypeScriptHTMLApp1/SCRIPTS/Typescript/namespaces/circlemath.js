"use strict";
var CircMath;
(function (CircMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calcCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calcCircumference = calcCircumference;
    })(Circle = CircMath.Circle || (CircMath.Circle = {}));
})(CircMath || (CircMath = {}));
