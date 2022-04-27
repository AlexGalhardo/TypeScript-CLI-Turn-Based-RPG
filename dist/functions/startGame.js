"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameStatistics_1 = __importDefault(require("../classes/GameStatistics"));
const main_1 = require("../main");
const createPlayerCharacter_1 = __importDefault(require("./createPlayerCharacter"));
const gameIntroduction_1 = __importDefault(require("./gameIntroduction"));
const startGameplay_1 = __importDefault(require("./startGameplay"));
const chalk_1 = __importDefault(require("chalk"));
function startGame() {
    return __awaiter(this, void 0, void 0, function* () {
        gameIntroduction_1.default();
        while (true) {
            console.log("\n");
            const player = createPlayerCharacter_1.default();
            startGameplay_1.default(player);
            console.log(chalk_1.default.bold.yellow('\n\t -------- GAME STATISTICS --------'));
            console.log(`\t Total Gold Coins Looted = ${GameStatistics_1.default.totalGoldCoinsLooted}`);
            console.log(`\t Total Gold Coins Used = ${GameStatistics_1.default.totalGoldCoinsUsed}`);
            console.log(`\t Total Health Potions Bought = ${GameStatistics_1.default.totalHealthPotionsBought}`);
            console.log(`\t Total Mana Potions Bought = ${GameStatistics_1.default.totalManaPotionsBought}`);
            console.log(`\t Total Health Potions Used = ${GameStatistics_1.default.totalHealthPotionsUsed}`);
            console.log(`\t Total Mana Potions Used = ${GameStatistics_1.default.totalManaPotionsUsed}`);
            console.log(`\t Total Normal Attack sUsed = ${GameStatistics_1.default.totalNormalAttacksUsed}`);
            console.log(`\t Total Damage Dealt ToMonsters = ${GameStatistics_1.default.totalDamageDealtToMonsters}`);
            console.log(`\t Total Damage Taken From Monsters = ${GameStatistics_1.default.totalDamageTakenFromMonsters}`);
            console.log("\n\n\t Do you wanna play again?");
            console.log("\t Enter [1] --> YES");
            console.log("\t Enter [2] --> NO");
            const playAgain = Number(main_1.userInput("\t Play again: "));
            if (playAgain === 1) {
                continue;
            }
            else {
                break;
            }
        }
        console.log(`\n\n\t Bye. Come Back Later! :D\n\n`);
    });
}
exports.default = startGame;
