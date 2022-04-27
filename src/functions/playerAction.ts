import Character from "../classes/Character";
import { userInput } from "../main";
import chalk from 'chalk';

export default function playerAction(player: Character) {
    while (true) {
        console.log(chalk.bold('\n\t @@ Player Round @@'))
        console.log('\t Enter [1] --> Normal Attack')
        console.log('\t Enter [2] --> Use Health Potion')
        console.log('\t Enter [3] --> Use Mana Potion')
        console.log('\t Enter [4] --> Use Spell')
        const playerAction = Number(userInput(chalk.bold.green('\t Option: ')))

        if (playerAction === 1) { return 1; break }
        if (playerAction === 2) { return 2; break }
        if (playerAction === 3) { return 3; break }
        console.log(chalk.bold.red('\t Enter a valid option!'));
    }
}

