import Character from "../classes/Character";
import GameStatistics from "../classes/GameStatistics";
import Monster from "../classes/Monster";
import playerAction from "./playerAction";

export default function fightMonster(player: Character, monster: Monster): boolean {

    while (true) {

        player.printCharacterRoundStatus();
        monster.printMonsterRoundStatus();

        const playerActionOption: number = playerAction(player);

        console.log('\n\t -------- ROUND STATUS --------')

        if (playerActionOption === 0) {
            continue
        } else {
            if (playerActionOption === 1) {
                GameStatistics.totalNormalAttacksUsed += 1;
                const damageToMonster = player.attack();
                GameStatistics.totalDamageDealtToMonsters += damageToMonster;
                monster.takeDamage(damageToMonster);
            } else if (playerActionOption === 2) {
                player.useHealthPotion();
            } else if (playerActionOption === 3) {
                player.useManaPotion();
            }

            player.takeDamage(monster.attack());
            player.regenerateEachRound();

            if (player.isDead()) {
                return false;
            }
            if (monster.isDead()) {
                player.getLootMonster(monster.lootAfterKill);
                player.getMonsterExperience(monster.experienceForKill);

                console.log(`\t Player Looted: ${monster.lootAfterKill} gold coins!`);
                console.log(`\t Player Received: ${monster.experienceForKill} points of experience!`);
                console.log(`\t Player Currently Experience: ${player.currentlyEXP} points experience`);
                console.log(`\t Player needs ${player.expToNextLevel} points experience to level up!`);

                return true;
            }
        }
    }
}
