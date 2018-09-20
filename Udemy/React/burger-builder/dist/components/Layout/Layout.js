"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const RAux_1 = __importDefault(require("../../hoc/RAux"));
require("./Layout.css");
const layout = (props) => (react_1.default.createElement(RAux_1.default, null,
    react_1.default.createElement("div", null, "Toolbar, SideDraw, Backdrop"),
    react_1.default.createElement("main", { className: "Content" }, props.children)));
exports.default = layout;
