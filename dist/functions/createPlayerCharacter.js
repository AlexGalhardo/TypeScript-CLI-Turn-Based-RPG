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
    let playerName = String(main_1.userInput(chalk_1.default.bold.green("\t Enter your character name [only string between 4-10 characters]: ")));
    const regexCharacterNameIsValid = /^[a-zA-Z]+$/;
    while (typeof playerName !== 'string' || !regexCharacterNameIsValid.test(playerName) || playerName.length < 4 || playerName.length > 10) {
        playerName = String(main_1.userInput(chalk_1.default.bold.green("\t Enter your character name [only string between 4-10 characters]: ")));
    }
    console.log("\n\n\t These are the vocations you can choose to play: ");
    console.log("\n\t Enter [1] --> Warrior");
    console.log("\n\t Enter [2] --> Mage");
    console.log("\n\t Enter [3] --> Archer\n");
    let playerVocationOption = Number(main_1.userInput(chalk_1.default.bold.green("\t Choose your character vocation: ")));
    while (isNaN(playerVocationOption) ||
        playerVocationOption < 1 ||
        playerVocationOption > 3) {
        playerVocationOption = Number(main_1.userInput(chalk_1.default.bold.green("\t Choose your character vocation: ")));
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
