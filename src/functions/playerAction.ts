import Character from "../classes/Character";
import { userInput } from "../main";
import chalk from 'chalk';
import { PLAYER_STRONG_SPELL_MANA_COST, PLAYER_WEAK_SPELL_MANA_COST } from "../GLOBAL";

export default function playerAction(player: Character) {

    console.log(chalk.bold('\n\t --- PLAYER ROUND ---'))
    console.log('\t Enter [1] --> Normal Attack')
    console.log('\t Enter [2] --> Use Health Potion')
    console.log('\t Enter [3] --> Use Mana Potion')
    console.log('\t Enter [4] --> Use Weak Magic Spell [Require 100 mana points]')
    console.log('\t Enter [5] --> Use Strong Magic Spell [Require 200 mana points]')

    while (true) {
        const playerAction = Number(userInput(chalk.bold.green('\t Option: ')))

        if (playerAction === 1) { return 1; break }
        if (playerAction === 2) { return 2; break }
        if (playerAction === 3) { return 3; break }
        if (playerAction === 4) {
            if (player.manaPoints >= PLAYER_WEAK_SPELL_MANA_COST) {
                return 4;
                break
            } else {
                console.log(chalk.bold.red('\t You do not have enough 100 mana points to use this weak magic spell!'))
            }
        }
        if (playerAction === 5) {
            if (player.manaPoints >= PLAYER_STRONG_SPELL_MANA_COST) {
                return 5;
                break
            } else {
                console.log(chalk.bold.red('\t You do not have enough 200 mana points to use this strong magic spell!'))
            }
        }
    }
}

