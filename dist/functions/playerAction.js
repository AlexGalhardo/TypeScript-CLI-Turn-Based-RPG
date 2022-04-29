"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../main");
const chalk_1 = __importDefault(require("chalk"));
const GLOBAL_1 = require("../GLOBAL");
function playerAction(player) {
    console.log(chalk_1.default.bold('\n\t --- PLAYER ROUND ---'));
    console.log('\t Enter [1] --> Normal Attack');
    console.log('\t Enter [2] --> Use Health Potion');
    console.log('\t Enter [3] --> Use Mana Potion');
    console.log('\t Enter [4] --> Use Weak Magic Spell [Require 100 mana points]');
    console.log('\t Enter [5] --> Use Strong Magic Spell [Require 200 mana points]');
    while (true) {
        const playerAction = Number((0, main_1.userInput)(chalk_1.default.bold.green('\t Option: ')));
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
        if (playerAction === 4) {
            if (player.manaPoints >= GLOBAL_1.PLAYER_WEAK_SPELL_MANA_COST) {
                return 4;
                break;
            }
            else {
                console.log(chalk_1.default.bold.red('\t You do not have enough 100 mana points to use this weak magic spell!'));
            }
        }
        if (playerAction === 5) {
            if (player.manaPoints >= GLOBAL_1.PLAYER_STRONG_SPELL_MANA_COST) {
                return 5;
                break;
            }
            else {
                console.log(chalk_1.default.bold.red('\t You do not have enough 200 mana points to use this strong magic spell!'));
            }
        }
    }
}
exports.default = playerAction;
