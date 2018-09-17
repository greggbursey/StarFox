"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Aux_1 = __importDefault(require("../../hoc/Aux"));
const layout = (props) => (react_1.default.createElement(Aux_1.default, null,
    react_1.default.createElement("div", null, "Toolbar, SideDraw, Backdrop"),
    react_1.default.createElement("main", null, props.children)));
exports.default = layout;
