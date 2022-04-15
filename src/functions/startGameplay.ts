/* eslint-disable prettier/prettier */
import Character from "../classes/Character";
import Dragon from "../classes/Dragon";
import Ferumbras from "../classes/Ferumbras";
import Orc from "../classes/Orc";
import Vampire from "../classes/Vampire";
import Werewolf from "../classes/Werewolf";
import roundAgainstMonster from "./roundAgainstMonster";

export default function startGameplay(player: Character) {

    let playerStillAlive = true;

    console.log('\n\t --------> FIGHT ROUND <--------')

    while (playerStillAlive) {

        playerStillAlive = roundAgainstMonster(player, new Orc());

        if (playerStillAlive) {

            playerStillAlive = roundAgainstMonster(player, new Werewolf());

            if (playerStillAlive) {

                playerStillAlive = roundAgainstMonster(player, new Vampire());

                if (playerStillAlive) {

                    playerStillAlive = roundAgainstMonster(player, new Dragon());

                    if (playerStillAlive) {

                        playerStillAlive = roundAgainstMonster(player, new Ferumbras());

                        if (playerStillAlive) {
                            console.log("\n\n\t ... *** CONGRATULATIONS *** ...");
                            console.log(`\n\n\t ... YOU WON THE GAME ${player.name}!\n\n`);
                            break;
                        }
                    }
                }
            }
        }
    }
}