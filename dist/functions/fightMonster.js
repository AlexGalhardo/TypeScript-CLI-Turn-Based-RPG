"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameStatistics_1 = __importDefault(require("../classes/GameStatistics"));
const playerAction_1 = __importDefault(require("./playerAction"));
const chooseGameMode_1 = require("./chooseGameMode");
const chalk_1 = __importDefault(require("chalk"));
function fightMonster(player, monster) {
    while (true) {
        player.printCharacterRoundStatus();
        monster.printMonsterRoundStatus();
        const playerActionOption = (0, playerAction_1.default)(player);
        console.log(chalk_1.default.bold('\n\t -------- ROUND STATUS --------'));
        if (playerActionOption === 0) {
            continue;
        }
        else {
            if (playerActionOption === 1) { // NORMAL ATTACK
                GameStatistics_1.default.totalNormalAttacksUsed++;
                ;
                const damageToMonster = player.attack();
                GameStatistics_1.default.totalDamageDealtToMonsters += damageToMonster;
                console.log('\t Player Used Normal Attack');
                monster.takeDamage(damageToMonster);
            }
            else if (playerActionOption === 2) { // USE HEALTH POTION
                GameStatistics_1.default.totalHealthPotionsUsed++;
                ;
                player.useHealthPotion();
            }
            else if (playerActionOption === 3) { // USE MANA POTION
                GameStatistics_1.default.totalManaPotionsUsed++;
                player.useManaPotion();
            }
            else if (playerActionOption === 4) { // USE WEAK MAGIC SPELL
                GameStatistics_1.default.totalWeakMagicSpellsUsed++;
                const damageToMonster = player.useWeakMagicSpell();
                GameStatistics_1.default.totalDamageDealtToMonsters += damageToMonster;
                console.log('\t Player Used Weak Magic Spell');
                monster.takeDamage(damageToMonster);
            }
            else if (playerActionOption === 5) { // USE STRONG MAGIC SPELL
                GameStatistics_1.default.totalStrongMagicSpellsUsed++;
                const damageToMonster = player.useStrongMagicSpell();
                GameStatistics_1.default.totalDamageDealtToMonsters += damageToMonster;
                monster.takeDamage(damageToMonster);
                console.log('\t Player Used Strong Magic Spell');
            }
            const monsterDamage = monster.attack() * chooseGameMode_1.SELECTED_GAME_MODE;
            GameStatistics_1.default.totalDamageTakenFromMonsters += monsterDamage;
            player.takeDamage(monsterDamage);
            player.regenerateEachRound();
            if (player.isDead()) {
                return false;
            }
            if (monster.isDead()) {
                const lootFromMonster = monster.lootAfterKill();
                player.getLootMonster(lootFromMonster);
                player.getMonsterExperience(monster.experienceForKill);
                const playerLevelUp = player.verifyAndUpdateLevelStatus();
                if (playerLevelUp) {
                    console.log(chalk_1.default.bold.green(`\t PLAYER LEVEL UP TO LEVEL ${player.currentlyLevel}!`));
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
exports.default = fightMonster;
