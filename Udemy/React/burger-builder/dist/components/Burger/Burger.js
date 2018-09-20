"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BurgerIngredient_1 = __importDefault(require("./BurgerIngredient/BurgerIngredient"));
const burger = (props) => {
    let transformedIngred = Object
        .keys(props.ingredients)
        .map(igKey => {
        return [...Array(props.ingredients[igKey])]
            .map((_, i) => {
            return react_1.default.createElement(BurgerIngredient_1.default, { key: igKey + i, type: igKey });
        });
    })
        .reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    if (transformedIngred.length === 0) {
        transformedIngred = react_1.default.createElement("p", null, "Please add ingredients!");
    }
    return (react_1.default.createElement("div", { className: "Burger" },
        react_1.default.createElement(BurgerIngredient_1.default, { type: "bread-top" }),
        transformedIngred,
        react_1.default.createElement(BurgerIngredient_1.default, { type: "bread-bottom" })));
};
exports.default = burger;
