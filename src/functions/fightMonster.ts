import Character from "../classes/Character";
import GameStatistics from "../classes/GameStatistics";
import Monster from "../classes/Monster";
import playerAction from "./playerAction";
import chalk from 'chalk';

export default function fightMonster(player: Character, monster: Monster): boolean {

    while (true) {

        player.printCharacterRoundStatus();
        monster.printMonsterRoundStatus();

        const playerActionOption: number = playerAction(player);

        console.log(chalk.bold('\n\t -------- ROUND STATUS --------'));

        if (playerActionOption === 0) {
            continue
        } else {
            if (playerActionOption === 1) {
                GameStatistics.totalNormalAttacksUsed++;;
                const damageToMonster = player.attack();
                GameStatistics.totalDamageDealtToMonsters += damageToMonster;
                monster.takeDamage(damageToMonster);
            } else if (playerActionOption === 2) {
                GameStatistics.totalHealthPotionsUsed++;;
                player.useHealthPotion();
            } else if (playerActionOption === 3) {
                GameStatistics.totalManaPotionsUsed++;;
                player.useManaPotion();
            }

            const monsterDamage = monster.attack();
            GameStatistics.totalDamageTakenFromMonsters += monsterDamage;
            player.takeDamage(monsterDamage);
            player.regenerateEachRound();

            if (player.isDead()) {
                return false;
            }
            if (monster.isDead()) {
                const lootFromMonster = monster.lootAfterKill();
                GameStatistics.totalGoldCoinsLooted += lootFromMonster;
                player.getLootMonster(lootFromMonster);

                player.getMonsterExperience(monster.experienceForKill);
                const playerLevelUp: boolean = player.verifyAndUpdateLevelStatus();

                if (playerLevelUp) {
                    console.log(chalk.bold.green(`\t PLAYER LEVEL UP TO LEVEL ${player.currentlyLevel}!`));
                }
                console.log(`\t Player Looted: ${monster.lootAfterKill()} gold coins!`);
                console.log(`\t Player Received: ${monster.experienceForKill} points of experience!`);
                console.log(`\t Player Currently Experience: ${player.currentlyEXP} points experience`);
                console.log(`\t Player needs more ${player.expToNextLevel} points of experience to level up!`);

                return true;
            }
        }
    }
}
