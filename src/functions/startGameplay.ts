import Character from "../classes/Character";
import Dragon from "../classes/Dragon";
import Ferumbras from "../classes/Ferumbras";
import Monster from "../classes/Monster";
import Orc from "../classes/Orc";
import Vampire from "../classes/Vampire";
import Werewolf from "../classes/Werewolf";
import roundAgainstMonster from "./roundAgainstMonster";
import chalk from 'chalk';

export default function startGameplay(player: Character) {

    let playerStillAlive = true;

    console.log('\n\t --------> FIGHT ROUND <--------')

    const monstersRounds = [new Orc(), new Werewolf(), new Vampire(), new Dragon(), new Ferumbras()];

    while (playerStillAlive) {
        playerStillAlive = roundAgainstMonster(player, monstersRounds.shift() as Monster);

        if (playerStillAlive && monstersRounds.length === 0) {
            console.log(chalk.bold.blue("\n\n\t ..... CONGRATULATIONS .....\n\n"));
            console.log(chalk.bold.blue(`\t ..... YOU WON THE GAME ${player.name} .....\n\n`));
            break;
        }
    }
}