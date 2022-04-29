"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const afterFight_1 = __importDefault(require("./afterFight"));
const fightMonster_1 = __importDefault(require("./fightMonster"));
const chalk_1 = __importDefault(require("chalk"));
function roundAgainstMonster(player, monster) {
    while (true) {
        const playerStillAlive = (0, fightMonster_1.default)(player, monster);
        if (playerStillAlive) {
            break;
        }
        else {
            console.log(chalk_1.default.bold.red("\n\n\t ... YOU ARE DEAD..."));
            console.log(chalk_1.default.bold.red("\n\n\t ... GAME OVER ...\n\n"));
            return false;
        }
    }
    if ((monster === null || monster === void 0 ? void 0 : monster.type) !== 'BOSS') {
        (0, afterFight_1.default)(player, monster.name);
    }
    return true;
}
exports.default = roundAgainstMonster;
