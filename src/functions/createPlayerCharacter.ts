/* eslint-disable prettier/prettier */
import Archer from "../classes/Archer";
import Character from "../classes/Character";
import Mage from "../classes/Mage";
import Warrior from "../classes/Warrior";
import { userInput } from "../main";

export default function createPlayerCharacter(): Character {
    const playerName = String(userInput("\t Enter your character name: "));

    console.log("\n\n\t These are the vocations you can choose to play: ");
    console.log("\n\t Enter [1] --> Warrior [add 75 HP / 25 MP points per level]");
    console.log("\n\t Enter [2] --> Mage [add 25 HP / 75 MP points per level]");
    console.log("\n\t Enter [3] --> Archer [add 50 HP / 50 MP points per level]\n");

    let playerVocationOption = Number(userInput("\t Choose your character vocation [Enter 1, 2 or 3]: "));

    while (
        isNaN(playerVocationOption) ||
        playerVocationOption < 1 ||
        playerVocationOption > 3
    ) {
        playerVocationOption = Number(userInput("\t Choose your character vocation [Enter 1, 2 or 3]: "));
    }

    if (playerVocationOption === 1) {
        return new Warrior(playerName);
    }
    if (playerVocationOption === 2) {
        return new Mage(playerName);
    }

    return new Archer(playerName);
}
