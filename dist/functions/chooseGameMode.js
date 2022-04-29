"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECTED_GAME_MODE = void 0;
const main_1 = require("../main");
const chalk_1 = __importDefault(require("chalk"));
const GLOBAL_1 = require("../GLOBAL");
function chooseGameMode() {
    console.log(chalk_1.default.bold("\n\n\t THESE ARE THE GAME MODES AVAILABLE TO CHOOSE: "));
    console.log("\n\t Enter [1] --> EASY --> Monsters have 50% LESS life and do 50% LESS damage");
    console.log("\n\t Enter [2] --> NORMAL");
    console.log("\n\t Enter [3] --> HARD --> Monsters have 50% MORE life and do 50% MORE damage\n");
    while (true) {
        let selectedGameMode = Number((0, main_1.userInput)(chalk_1.default.bold.green("\t Choose your game mode: ")));
        if (selectedGameMode === 1) {
            exports.SELECTED_GAME_MODE = GLOBAL_1.GAME_MODE_EASY;
            break;
        }
        else if (selectedGameMode === 2) {
            exports.SELECTED_GAME_MODE = GLOBAL_1.GAME_MODE_NORMAL;
            break;
        }
        else if (selectedGameMode === 3) {
            exports.SELECTED_GAME_MODE = GLOBAL_1.GAME_MODE_HARD;
            break;
        }
    }
}
exports.default = chooseGameMode;
