import Character from "../abstract-classes/Character";
import Dragon from "../monsters/Dragon";
import Ferumbras from "../monsters/Ferumbras";
import Monster from "../abstract-classes/Monster";
import Orc from "../monsters/Orc";
import Vampire from "../monsters/Vampire";
import Werewolf from "../monsters/Werewolf";
import roundAgainstMonster from "./round-against-monster";
import chalk from "chalk";

export default function startGameplay(player: Character) {
    let playerStillAlive = true;

    console.log("\n--------> FIGHT ROUND <--------");

    const monstersRounds = [new Orc(), new Werewolf(), new Vampire(), new Dragon(), new Ferumbras()];

    while (playerStillAlive) {
        playerStillAlive = roundAgainstMonster(player, monstersRounds.shift() as Monster);

        if (playerStillAlive && monstersRounds.length === 0) {
            console.log(chalk.bold.blue("\n\n..... CONGRATULATIONS .....\n\n"));
            console.log(chalk.bold.blue(`..... YOU WON THE GAME ${player.name} .....\n\n`));
            break;
        }
    }
}
