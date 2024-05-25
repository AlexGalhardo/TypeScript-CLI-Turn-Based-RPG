import Character from "../abstract-classes/Character";
import GameStatistics from "../utils/game-statistics";
import Monster from "../abstract-classes/Monster";
import playerAction from "./player-action";
import { SELECTED_GAME_MODE } from "./choose-game-mode";
import chalk from "chalk";

export default function fightMonster(player: Character, monster: Monster): boolean {
    while (true) {
        player.printCharacterRoundStatus();
        monster.printMonsterRoundStatus();

        const playerActionOption: number = playerAction(player);

        console.log(chalk.bold("\n-------- ROUND STATUS --------"));

        if (playerActionOption === 0) {
            continue;
        } else {
            if (playerActionOption === 1) {
                // NORMAL ATTACK
                GameStatistics.totalNormalAttacksUsed++;
                const damageToMonster = player.attack();
                GameStatistics.totalDamageDealtToMonsters += damageToMonster;
                console.log("Player Used Normal Attack");
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
                console.log("Player Used Weak Magic Spell");
                monster.takeDamage(damageToMonster);
            } else if (playerActionOption === 5) {
                // USE STRONG MAGIC SPELL
                GameStatistics.totalStrongMagicSpellsUsed++;
                const damageToMonster = player.useStrongMagicSpell();
                GameStatistics.totalDamageDealtToMonsters += damageToMonster;
                monster.takeDamage(damageToMonster);
                console.log("Player Used Strong Magic Spell");
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
                    console.log(chalk.bold.green(`PLAYER LEVEL UP TO LEVEL ${player.currentlyLevel}!`));
                }
                console.log(`Player Looted: ${monster.lootAfterKill()} gold coins!`);
                console.log(`Player Received: ${monster.experienceForKill} points of experience!`);
                console.log(`Player Currently Experience: ${player.currentlyEXP} points experience`);
                console.log(`Player needs more ${player.expToNextLevel} points of experience to level up!`);

                return true;
            }
        }
    }
}
