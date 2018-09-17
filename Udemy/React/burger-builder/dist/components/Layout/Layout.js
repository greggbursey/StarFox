"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const RAux_1 = __importDefault(require("../../hoc/RAux"));
const classes = __importStar(require("./Layout.css"));
const layout = (props) => (react_1.default.createElement(RAux_1.default, null,
    react_1.default.createElement("div", null, "Toolbar, SideDraw, Backdrop"),
    react_1.default.createElement("main", { className: classes.Content }, props.children)));
exports.default = layout;
