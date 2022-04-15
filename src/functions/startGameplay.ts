/* eslint-disable prettier/prettier */
import Character from "../classes/Character";
import Dragon from "../classes/Dragon";
import Ferumbras from "../classes/Ferumbras";
import Orc from "../classes/Orc";
import npcRound from "./npcRound";
import roundAgainstMonster from "./roundAgainstMonster";

export default function startGameplay(player: Character) {

    let playerAlive = true;

    npcRound(player);

    console.log('\n\t --------> FIGHT ROUND <--------')

    while (playerAlive) {
        playerAlive = roundAgainstMonster(playerAlive, player, new Orc());
        if (playerAlive) {
            playerAlive = roundAgainstMonster(playerAlive, player, new Dragon());
            if (playerAlive) {
                playerAlive = roundAgainstMonster(playerAlive, player, new Ferumbras());
            } else {
                break;
            }
        } else {
            break;
        }
    }
}
