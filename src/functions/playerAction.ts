/* eslint-disable prettier/prettier */
import Character from "../classes/Character";
import { userInput } from "../main";

export default function playerAction(player: Character) {
    while (true) {
        console.log('\n\t @ Player Round @')
        console.log('\t Enter [1] --> Normal Attack')
        console.log('\t Enter [2] --> Use Health Potion')
        console.log('\t Enter [3] --> Use Mana Potion')
        console.log('\t Enter [4] --> Use Spell')
        const playerAction = Number(userInput('\t Option: '))

        if (playerAction === 1) { return 1; break }
        if (playerAction === 2) { return 2; break }
        if (playerAction === 3) { return 3; break }
        console.log('\t Enter a valid option!');
    }
}

