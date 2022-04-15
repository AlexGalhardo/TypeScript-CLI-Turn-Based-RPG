/* eslint-disable prettier/prettier */
import Character from "../classes/Character";
import npcRound from "./npcRound";

export default function afterFight(player: Character) {
    console.log('\n\n\t ....Player Defeated the Monster!\n\n')
    npcRound(player);
    console.log('\n\t --------> FIGHT ROUND <--------')
}
