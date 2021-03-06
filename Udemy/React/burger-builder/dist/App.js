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
const Layout_1 = __importDefault(require("./components/Layout/Layout"));
const BurgerBuilder_1 = __importDefault(require("./containers/BurgerBuilder/BurgerBuilder"));
class App extends react_1.Component {
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Layout_1.default, null,
                react_1.default.createElement(BurgerBuilder_1.default, null))));
    }
}
exports.default = App;
