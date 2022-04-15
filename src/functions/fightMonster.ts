/* eslint-disable prettier/prettier */

import Character from "../classes/Character";
import GameStatistics from "../classes/GameStatistics";
import Monster from "../classes/Monster";

export default function fightMonster(player: Character, monster: Monster) {
    while (true) {
        player.printCharacterRoundStatus();
        monster.printMonsterRoundStatus();

        playerAction = playerAction(player);

        printRoundStatus();

        if (playerAction === 0) {
            continue;
        } else {
            if (playerAction === 1) {
                GameStatistics.totalNormalAttacksUsed += 1;
                const damageToMonster = player.attack();
                GameStatistics.totalDamageDealtToMonsters += damageToMonster;
                monster.takeDamage(damageToMonster);
            } else if (playerAction === 2) {
                player.useHealthPotion();
            } else if (playerAction === 3) {
                player.useManaPotion();
            }

            player.takeDamage(monster.attack());

            if (player.isDead()) {
                return false;
            }
            if (monster.isDead()) {
                player.getLootMonster(monster.lootAfterKill);
                player.getMonsterExperience(monster.experienceForKill);

                console.log(`\t Player Looted: ${monster.lootAfterKill} gold coins!`);
                console.log(`\t Player Received: ${monster.experienceForKill} points of experience!`);
                console.log(`\t Player Currently Experience: ${player.currentlyEXP} points experience`);

                return true;
            }
        }
    }
}
