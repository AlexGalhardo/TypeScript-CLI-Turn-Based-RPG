import Archer from "../classes/Archer";
import Character from "../classes/Character";
import Mage from "../classes/Mage";
import Warrior from "../classes/Warrior";
import { userInput } from "../main";
import chalk from 'chalk';

export default function createPlayerCharacter(): Character {

    let playerName = String(userInput(chalk.bold.green("\t Enter your character name [only string between 4-10 characters]: ")));

    const regexCharacterNameIsValid = /^[a-zA-Z]+$/;

    while (typeof playerName !== 'string' || !regexCharacterNameIsValid.test(playerName) || playerName.length < 4 || playerName.length > 10) {
        playerName = String(userInput(chalk.bold.green("\t Enter your character name [only string between 4-10 characters]: ")));
    }

    console.log(chalk.bold("\n\n\t THESE ARE THE VOCATIONS YOU CAN CHOOSE YO PLAY: "));
    console.log("\n\t Enter [1] --> Warrior [weak on spells, low on mana, good on normal attacks and has a lot of health]");
    console.log("\n\t Enter [2] --> Mage [strong in spells, has a lot of mana, low health and low normal attack]");
    console.log("\n\t Enter [3] --> Archer [balanced in all]\n");

    let playerVocationOption = Number(userInput(chalk.bold.green("\t Choose your character vocation: ")));

    while (
        isNaN(playerVocationOption) ||
        playerVocationOption < 1 ||
        playerVocationOption > 3
    ) {
        playerVocationOption = Number(userInput(chalk.bold.green("\t Choose your character vocation: ")));
    }

    if (playerVocationOption === 1) {
        return new Warrior(playerName);
    }
    if (playerVocationOption === 2) {
        return new Mage(playerName);
    }

    return new Archer(playerName);
}
