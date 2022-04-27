
import Character from "../classes/Character";
import npcRound from "./npcRound";

export default function afterFight(player: Character, monsterName: string) {
    console.log(`\n\n\t ....Player Defeated ${monsterName}!\n`)
    npcRound(player);
    console.log('\n\t --------> FIGHT ROUND <--------')
}
