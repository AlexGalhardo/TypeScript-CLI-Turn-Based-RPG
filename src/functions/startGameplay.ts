import Character from "../classes/Character";
import Dragon from "../classes/Dragon";
import Ferumbras from "../classes/Ferumbras";
import Monster from "../classes/Monster";
import Orc from "../classes/Orc";
import Vampire from "../classes/Vampire";
import Werewolf from "../classes/Werewolf";
import roundAgainstMonster from "./roundAgainstMonster";

export default function startGameplay(player: Character) {

    let playerStillAlive = true;

    console.log('\n\t --------> FIGHT ROUND <--------')

    const monstersRounds = [new Orc(), new Werewolf(), new Vampire(), new Dragon(), new Ferumbras()];

    while (playerStillAlive) {
        playerStillAlive = roundAgainstMonster(player, monstersRounds.shift() as Monster);
    }

    if (playerStillAlive) {
        console.log("\n\n\t ... *** CONGRATULATIONS *** ...");
        console.log(`\n\n\t ... YOU WON THE GAME ${player.name}!\n\n`);
    }
}