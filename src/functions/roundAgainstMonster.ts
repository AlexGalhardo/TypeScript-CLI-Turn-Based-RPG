import Character from "../classes/Character";
import Monster from "../classes/Monster";
import afterFight from "./afterFight";
import fightMonster from "./fightMonster";

export default function roundAgainstMonster(player: Character, monster: Monster): boolean {

    while (true) {

        const playerStillAlive: boolean = fightMonster(player, monster);

        if (playerStillAlive) {
            break;
        } else {
            console.log("\n\n\t ... YOU ARE DEAD...");
            console.log("\n\n\t ... GAME OVER ...\n\n");
            return false;
        }
    }

    if (monster?.type !== 'BOSS') {
        afterFight(player, monster.name);
    }

    return true;
}
