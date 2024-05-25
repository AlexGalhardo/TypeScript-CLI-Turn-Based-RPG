import Character from "../classes/Character";
import GameStatistics from "../classes/GameStatistics";
import Monster from "../classes/Monster";
import playerAction from "./playerAction";
import { SELECTED_GAME_MODE } from "./chooseGameMode";
import chalk from "chalk";

export default function fightMonster(player: Character, monster: Monster): boolean {
    while (true) {
        player.printCharacterRoundStatus();
        monster.printMonsterRoundStatus();

        const playerActionOption: number = playerAction(player);

        console.log(chalk.bold("\n\t -------- ROUND STATUS --------"));

        if (playerActionOption === 0) {
            continue;
        } else {
            if (playerActionOption === 1) {
                // NORMAL ATTACK
                GameStatistics.totalNormalAttacksUsed++;
                const damageToMonster = player.attack();
                GameStatistics.totalDamageDealtToMonsters += damageToMonster;
                console.log("\t Player Used Normal Attack");
                monster.takeDamage(damageToMonster);
            } else if (playerActionOption === 2) {
                // USE HEALTH POTION
                GameStatistics.totalHealthPotionsUsed++;
                player.useHealthPotion();
            } else if (playerActionOption === 3) {
                // USE MANA POTION
                GameStatistics.totalManaPotionsUsed++;
                player.useManaPotion();
            } else if (playerActionOption === 4) {
                // USE WEAK MAGIC SPELL
                GameStatistics.totalWeakMagicSpellsUsed++;
                const damageToMonster = player.useWeakMagicSpell();
                GameStatistics.totalDamageDealtToMonsters += damageToMonster;
                console.log("\t Player Used Weak Magic Spell");
                monster.takeDamage(damageToMonster);
            } else if (playerActionOption === 5) {
                // USE STRONG MAGIC SPELL
                GameStatistics.totalStrongMagicSpellsUsed++;
                const damageToMonster = player.useStrongMagicSpell();
                GameStatistics.totalDamageDealtToMonsters += damageToMonster;
                monster.takeDamage(damageToMonster);
                console.log("\t Player Used Strong Magic Spell");
            }

            const monsterDamage = monster.attack() * SELECTED_GAME_MODE;
            GameStatistics.totalDamageTakenFromMonsters += monsterDamage;
            player.takeDamage(monsterDamage);
            player.regenerateEachRound();

            if (player.isDead()) {
                return false;
            }
            if (monster.isDead()) {
                const lootFromMonster = monster.lootAfterKill();
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
