"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//import { PI, calcCircumference } from "./math/circle";//--relative path
//import { Component } from "@angular/core";//--absolute path - always looked up in the node_modules folder by default
var Circle = require("./SCRIPTS/Typescript/math/circle");
var rectangle_1 = require("./SCRIPTS/Typescript/math/rectangle");
//
console.log(Circle.PI);
console.log(Circle.calcCircumference(20));
console.log(rectangle_1.default(20, 50));
