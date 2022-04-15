/* eslint-disable prettier/prettier */
import Character from "../classes/Character";
import Monster from "../classes/Monster";
import afterFight from "./afterFight";
import fightMonster from "./fightMonster";

export default function roundAgainstMonster(playerAlive: boolean, player: Character, monster: Monster): boolean {

    while (true) {

        let playerStillAlive = fightMonster(player, monster);

        if (playerStillAlive) {
            break;
        } else {
            console.log("\n\n\t ... YOU ARE DEAD...");
            console.log("\n\n\t ... GAME OVER ...\n\n");
            playerStillAlive = false;
            return playerStillAlive;
        }
    }

    afterFight(player);

    return true;
}
