"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const npcRound_1 = __importDefault(require("./npcRound"));
const chalk_1 = __importDefault(require("chalk"));
function afterFight(player, monsterName) {
    console.log(chalk_1.default.bold.cyan(`\n\n\t ....PLAYER DEFEATED ${monsterName}!\n`));
    npcRound_1.default(player);
    console.log(chalk_1.default.bold('\n\t --------> FIGHT ROUND <--------'));
}
exports.default = afterFight;
