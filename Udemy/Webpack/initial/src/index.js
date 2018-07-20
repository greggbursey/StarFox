//const sum = require("./sum");// CommonJS way
import sum from "./sum";
import "./image_viewer";// because "image_viewer" does not export any code

const total = sum(10, 5);
console.log(total);