"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
function gameIntroduction() {
    console.log(chalk_1.default.bold.blue("\n\n\t WELCOME TO TYPESCRIPT CLI RPG!"));
    console.log(chalk_1.default.bold("\n\t MADE FOR YOU FUN BY: Alex Galhardo <aleexgvieira@gmail.com>"));
    console.log(chalk_1.default.bold("\n\t SOURCE CODE: https://github.com/AlexGalhardo/Typescript-CLI-RPG"));
}
exports.default = gameIntroduction;
