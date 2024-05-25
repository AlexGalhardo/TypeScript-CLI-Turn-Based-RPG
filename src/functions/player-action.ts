import Character from "../abstract-classes/Character";
import { userInput } from "../start";
import chalk from "chalk";
import { PLAYER_STRONG_SPELL_MANA_COST, PLAYER_WEAK_SPELL_MANA_COST } from "../envs";

export default function playerAction(player: Character) {
    console.log(chalk.bold("\n--- PLAYER ROUND ---"));
    console.log("Enter [1] --> Normal Attack");
    console.log("Enter [2] --> Use Health Potion");
    console.log("Enter [3] --> Use Mana Potion");
    console.log("Enter [4] --> Use Weak Magic Spell [Require 100 mana points]");
    console.log("Enter [5] --> Use Strong Magic Spell [Require 200 mana points]");

    while (true) {
        const playerAction = Number(userInput(chalk.bold.green("Option: ")));

        if (playerAction === 1) {
            return 1;
        }
        if (playerAction === 2) {
            return 2;
        }
        if (playerAction === 3) {
            return 3;
        }
        if (playerAction === 4) {
            if (player.manaPoints >= PLAYER_WEAK_SPELL_MANA_COST) {
                return 4;
            } else {
                console.log(chalk.bold.red("You do not have enough 100 mana points to use this weak magic spell!"));
            }
        }
        if (playerAction === 5) {
            if (player.manaPoints >= PLAYER_STRONG_SPELL_MANA_COST) {
                return 5;
            } else {
                console.log(chalk.bold.red("You do not have enough 200 mana points to use this strong magic spell!"));
            }
        }
    }
}
