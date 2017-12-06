"use strict";
/*
TSC command = tsc --outFile app.js
This combines all .ts files into one output - app.js
*/
//--------------------------- imports
/// <reference path ="circlemath.ts"/>
/// <reference path ="rectanglemath.ts"/>
//--------------------------- 
var CircleMath = CircMath.Circle;
var RectangleMath = RectMath;
//--------------------------- 
console.log(RectMath.calcRectangle(10, 5));
console.log(RectangleMath.calcRectangle(10, 5));
console.log(CircMath.Circle.calcCircumference(10));
console.log(CircleMath.calcCircumference(10));
