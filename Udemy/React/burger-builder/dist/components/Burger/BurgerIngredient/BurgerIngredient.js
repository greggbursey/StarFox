"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
class BurgerIngredient extends react_1.Component {
    constructor() {
        super(...arguments);
        this.props = {
            type: ""
        };
    }
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case "bread-bottom":
                ingredient = react_1.default.createElement("div", { className: "BreadBottom" });
                break;
            case "bread-top":
                ingredient = (react_1.default.createElement("div", { className: "BreadTop" },
                    react_1.default.createElement("div", { className: "Seeds1" }),
                    react_1.default.createElement("div", { className: "Seeds2" })));
                break;
            case "meat":
                ingredient = react_1.default.createElement("div", { className: "Meat" });
                break;
            case "cheese":
                ingredient = react_1.default.createElement("div", { className: "Cheese" });
                break;
            case "bacon":
                ingredient = react_1.default.createElement("div", { className: "Bacon" });
                break;
            case "salad":
                ingredient = react_1.default.createElement("div", { className: "Salad" });
                break;
            default:
                break;
        }
        return ingredient;
    }
}
BurgerIngredient.propTypes = {
    type: prop_types_1.default.string.isRequired
};
exports.default = BurgerIngredient;
