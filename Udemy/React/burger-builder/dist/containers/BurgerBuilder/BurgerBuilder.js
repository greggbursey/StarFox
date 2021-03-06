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
const RAux_1 = __importDefault(require("../../hoc/RAux"));
const Burger_1 = __importDefault(require("../../components/Burger/Burger"));
class BurgerBuilder extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            ingredeients: {
                salad: 1,
                bacon: 1,
                cheese: 2,
                meat: 2
            }
        };
    }
    render() {
        return (react_1.default.createElement(RAux_1.default, null,
            react_1.default.createElement(Burger_1.default, { ingredeients: this.state.ingredeients }),
            react_1.default.createElement("div", null, "Build Controls")));
    }
}
exports.default = BurgerBuilder;
