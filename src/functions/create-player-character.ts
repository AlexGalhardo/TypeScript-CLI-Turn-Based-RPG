import Archer from "../vocations/Archer";
import Character from "../abstract-classes/Character";
import Mage from "../vocations/Mage";
import Warrior from "../vocations/Warrior";
import { userInput } from "../start";
import chalk from "chalk";

export default function createPlayerCharacter(): Character {
    console.log(chalk.bold("\n\nTHESE ARE THE VOCATIONS YOU CAN CHOOSE YO PLAY: "));
    console.log(
        "\nEnter [1] --> Warrior [weak on spells, low on mana, good on normal attacks and has a lot of health]",
    );
    console.log("\nEnter [2] --> Mage [strong in spells, has a lot of mana, low health and low normal attack]");
    console.log("\nEnter [3] --> Archer [balanced in all]\n");

    let playerVocationOption = Number(userInput(chalk.bold.green("Choose your character vocation: ")));

    while (isNaN(playerVocationOption) || playerVocationOption < 1 || playerVocationOption > 3) {
        playerVocationOption = Number(userInput(chalk.bold.green("Choose your character vocation: ")));
    }

    if (playerVocationOption === 1) return new Warrior("Warrior");
    if (playerVocationOption === 2) return new Mage("Mage");
    return new Archer("Archer");
}
