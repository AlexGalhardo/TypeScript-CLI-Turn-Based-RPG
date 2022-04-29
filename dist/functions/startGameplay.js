"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dragon_1 = __importDefault(require("../classes/Dragon"));
const Ferumbras_1 = __importDefault(require("../classes/Ferumbras"));
const Orc_1 = __importDefault(require("../classes/Orc"));
const Vampire_1 = __importDefault(require("../classes/Vampire"));
const Werewolf_1 = __importDefault(require("../classes/Werewolf"));
const roundAgainstMonster_1 = __importDefault(require("./roundAgainstMonster"));
const chalk_1 = __importDefault(require("chalk"));
function startGameplay(player) {
    let playerStillAlive = true;
    console.log('\n\t --------> FIGHT ROUND <--------');
    const monstersRounds = [new Orc_1.default(), new Werewolf_1.default(), new Vampire_1.default(), new Dragon_1.default(), new Ferumbras_1.default()];
    while (playerStillAlive) {
        playerStillAlive = (0, roundAgainstMonster_1.default)(player, monstersRounds.shift());
        if (playerStillAlive && monstersRounds.length === 0) {
            console.log(chalk_1.default.bold.blue("\n\n\t !!!!!!!!!!!CONGRATULATIONS!!!!!!!!!!!\n\n"));
            console.log(chalk_1.default.bold.blue(`\t !!!!!!!!!!!YOU WON THE GAME ${player.name}!!!!!!!!!!!\n\n`));
            break;
        }
    }
}
exports.default = startGameplay;
