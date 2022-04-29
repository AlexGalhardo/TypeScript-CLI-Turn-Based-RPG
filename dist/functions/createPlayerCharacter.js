"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Archer_1 = __importDefault(require("../classes/Archer"));
const Mage_1 = __importDefault(require("../classes/Mage"));
const Warrior_1 = __importDefault(require("../classes/Warrior"));
const main_1 = require("../main");
const chalk_1 = __importDefault(require("chalk"));
function createPlayerCharacter() {
    let playerName = String((0, main_1.userInput)(chalk_1.default.bold.green("\t Enter your character name [only string between 4-10 characters]: ")));
    const regexCharacterNameIsValid = /^[a-zA-Z]+$/;
    while (typeof playerName !== 'string' || !regexCharacterNameIsValid.test(playerName) || playerName.length < 4 || playerName.length > 10) {
        playerName = String((0, main_1.userInput)(chalk_1.default.bold.green("\t Enter your character name [only string between 4-10 characters]: ")));
    }
    console.log(chalk_1.default.bold("\n\n\t THESE ARE THE VOCATIONS YOU CAN CHOOSE YO PLAY: "));
    console.log("\n\t Enter [1] --> Warrior [weak on spells, low on mana, good on normal attacks and has a lot of health]");
    console.log("\n\t Enter [2] --> Mage [strong in spells, has a lot of mana, low health and low normal attack]");
    console.log("\n\t Enter [3] --> Archer [balanced in all]\n");
    let playerVocationOption = Number((0, main_1.userInput)(chalk_1.default.bold.green("\t Choose your character vocation: ")));
    while (isNaN(playerVocationOption) ||
        playerVocationOption < 1 ||
        playerVocationOption > 3) {
        playerVocationOption = Number((0, main_1.userInput)(chalk_1.default.bold.green("\t Choose your character vocation: ")));
    }
    if (playerVocationOption === 1) {
        return new Warrior_1.default(playerName);
    }
    if (playerVocationOption === 2) {
        return new Mage_1.default(playerName);
    }
    return new Archer_1.default(playerName);
}
exports.default = createPlayerCharacter;
