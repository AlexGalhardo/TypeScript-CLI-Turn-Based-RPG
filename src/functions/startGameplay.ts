/* eslint-disable prettier/prettier */
import Character from "../classes/Character";
import Dragon from "../classes/Dragon";
import Ferumbras from "../classes/Ferumbras";
import Orc from "../classes/Orc";
import npcRound from "./npcRound";
import roundAgainstMonster from "./roundAgainstMonster";

export default function startGameplay(player: Character) {

    let playerStillAlive = true;

    npcRound(player);

    console.log('\n\t --------> FIGHT ROUND <--------')

    while (playerStillAlive) {
        playerStillAlive = roundAgainstMonster(player, new Orc());
        if (playerStillAlive) {
            playerStillAlive = roundAgainstMonster(player, new Dragon());
            if (playerStillAlive) {
                playerStillAlive = roundAgainstMonster(player, new Ferumbras());
                if (playerStillAlive) {
                    console.log("\n\n\t ... CONGRATULATIONS ...");
                    console.log("\n\n\t ... YOU WON! ...\n\n");
                    break;
                }
            }
        }
    }
}
