//
//import { PI, calcCircumference } from "./math/circle";//--relative path
//import { Component } from "@angular/core";//--absolute path - always looked up in the node_modules folder by default
import * as Circle from "./SCRIPTS/Typescript/math/circle";
import calculateRect from "./SCRIPTS/Typescript/math/rectangle";
//
console.log(Circle.PI);
console.log(Circle.calcCircumference(20));
console.log(calculateRect(20, 50));