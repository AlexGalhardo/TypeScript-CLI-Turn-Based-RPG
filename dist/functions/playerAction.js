"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../main");
const chalk_1 = __importDefault(require("chalk"));
function playerAction(player) {
    while (true) {
        console.log(chalk_1.default.bold('\n\t --- PLAYER ROUND ---'));
        console.log('\t Enter [1] --> Normal Attack');
        console.log('\t Enter [2] --> Use Health Potion');
        console.log('\t Enter [3] --> Use Mana Potion');
        console.log('\t Enter [4] --> Use Spell');
        const playerAction = Number(main_1.userInput(chalk_1.default.bold.green('\t Option: ')));
        if (playerAction === 1) {
            return 1;
            break;
        }
        if (playerAction === 2) {
            return 2;
            break;
        }
        if (playerAction === 3) {
            return 3;
            break;
        }
        console.log(chalk_1.default.bold.red('\t Enter a valid option!'));
    }
}
exports.default = playerAction;
