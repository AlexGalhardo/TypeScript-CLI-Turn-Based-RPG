"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GLOBAL_1 = require("../GLOBAL");
const main_1 = require("../main");
const GameStatistics_1 = __importDefault(require("./GameStatistics"));
const LivingBeing_1 = __importDefault(require("./LivingBeing"));
const chalk_1 = __importDefault(require("chalk"));
class Character extends LivingBeing_1.default {
    constructor(vocation, name, minAttack, maxAttack, addLifePointsPerLevel, addManaPointsPerLevel, regenerateLifePointsPerRound, regenerateManaPointsPerRound) {
        super(name, GLOBAL_1.PLAYER_START_LIFE_POINTS, GLOBAL_1.PLAYER_MIN_ATTACK, GLOBAL_1.PLAYER_MAX_ATTACK);
        this.vocation = vocation;
        this.name = name;
        this.minAttack = minAttack;
        this.maxAttack = maxAttack;
        this.addLifePointsPerLevel = addLifePointsPerLevel;
        this.addManaPointsPerLevel = addManaPointsPerLevel;
        this.regenerateLifePointsPerRound = regenerateLifePointsPerRound;
        this.regenerateManaPointsPerRound = regenerateManaPointsPerRound;
        this.vocation = vocation;
        this.name = name;
        this.currentlyLevel = 1;
        this.currentlyEXP = 0;
        this.expToNextLevel = GLOBAL_1.expToLevelUp[2];
        this.maxLifePoints = GLOBAL_1.PLAYER_START_LIFE_POINTS;
        this.maxManaPoints = GLOBAL_1.PLAYER_START_MANA_POINTS;
        this.minMagicAttack = GLOBAL_1.PLAYER_MIN_MAGIC_ATTACK;
        this.maxMagicAttack = GLOBAL_1.PLAYER_MAX_MAGIC_ATTACK;
        this.manaPoints = GLOBAL_1.PLAYER_START_MANA_POINTS;
        this.addLifePointsPerLevel = addLifePointsPerLevel;
        this.addManaPointsPerLevel = addManaPointsPerLevel;
        this.regenerateLifePointsPerRound = regenerateLifePointsPerRound;
        this.regenerateManaPointsPerRound = regenerateManaPointsPerRound;
        this.currentlyHealthPotions = 0;
        this.currentlyManaPotions = 0;
        this.currentlyGoldCoins = 0;
    }
    printCharacterRoundStatus() {
        console.log(chalk_1.default.bold("\n\t --- PLAYER STATUS ---"));
        console.log(chalk_1.default.bold.red(`\t Life: ${this.lifePoints}`) + ` / ${this.maxLifePoints}`);
        console.log(`\t Mana: ${this.manaPoints} / ${this.maxManaPoints}`);
        console.log(`\t Health Potions: ${this.currentlyHealthPotions}`);
        console.log(`\t Mana Potions: ${this.currentlyManaPotions}`);
        console.log(`\t Regenerated: ${this.regenerateLifePointsPerRound} points of life!`);
        console.log(`\t Regenerated: ${this.regenerateManaPointsPerRound} points of mana!`);
    }
    takeDamage(monsterDamage) {
        GameStatistics_1.default.totalDamageTakenFromMonsters += monsterDamage;
        this.lifePoints -= monsterDamage;
        console.log(`\t Monster Damage To Player: ${monsterDamage}`);
    }
    getLootMonster(lootMonster) {
        GameStatistics_1.default.totalGoldCoinsLooted += lootMonster;
        this.currentlyGoldCoins += lootMonster;
    }
    getMonsterExperience(experienceGainedFromMonster) {
        this.currentlyEXP += experienceGainedFromMonster;
    }
    usedGoldCoinsInNPC(usedGoldCoinsInNPC) {
        GameStatistics_1.default.totalGoldCoinsUsed += usedGoldCoinsInNPC;
        this.currentlyGoldCoins -= usedGoldCoinsInNPC;
    }
    addHealthPotions(healthPotions) {
        this.currentlyHealthPotions += healthPotions;
    }
    addManaPotions(manaPotions) {
        this.currentlyManaPotions += manaPotions;
    }
    regenerateEachRound() {
        this.lifePoints += this.regenerateLifePointsPerRound;
        this.manaPoints += this.regenerateManaPointsPerRound;
    }
    useWeakMagicSpell() {
        this.manaPoints -= GLOBAL_1.PLAYER_WEAK_SPELL_MANA_COST;
        return (Math.floor(Math.random() * this.maxMagicAttack) + this.minMagicAttack) * 1.25;
    }
    useStrongMagicSpell() {
        this.manaPoints -= GLOBAL_1.PLAYER_STRONG_SPELL_MANA_COST;
        return (Math.floor(Math.random() * this.maxMagicAttack) + this.minMagicAttack) * 2;
    }
    verifyAndUpdateLevelStatus() {
        if (this.currentlyEXP >= this.expToNextLevel) {
            this.currentlyLevel++;
            this.expToNextLevel === GLOBAL_1.expToLevelUp[this.currentlyLevel];
            this.maxLifePoints += this.addLifePointsPerLevel;
            this.maxManaPoints += this.addManaPointsPerLevel;
            this.minAttack += this.vocation === "WARRIOR"
                ? GLOBAL_1.ADD_WARRIOR_ATTACK_PER_LEVEL
                : this.vocation === "ARCHER"
                    ? GLOBAL_1.ADD_ARCHER_ATTACK_PER_LEVEL
                    : GLOBAL_1.ADD_MAGE_ATTACK_PER_LEVEL;
            this.maxAttack += this.vocation === "WARRIOR"
                ? GLOBAL_1.ADD_WARRIOR_ATTACK_PER_LEVEL
                : this.vocation === "ARCHER"
                    ? GLOBAL_1.ADD_ARCHER_ATTACK_PER_LEVEL
                    : GLOBAL_1.ADD_MAGE_ATTACK_PER_LEVEL;
            this.minMagicAttack += this.vocation === "WARRIOR"
                ? GLOBAL_1.ADD_WARRIOR_MAGIC_ATTACK_PER_LEVEL
                : this.vocation === "ARCHER"
                    ? GLOBAL_1.ADD_ARCHER_MAGIC_ATTACK_PER_LEVEL
                    : GLOBAL_1.ADD_MAGE_MAGIC_ATTACK_PER_LEVEL;
            this.maxMagicAttack += this.vocation === "WARRIOR"
                ? GLOBAL_1.ADD_WARRIOR_MAGIC_ATTACK_PER_LEVEL
                : this.vocation === "ARCHER"
                    ? GLOBAL_1.ADD_ARCHER_MAGIC_ATTACK_PER_LEVEL
                    : GLOBAL_1.ADD_MAGE_MAGIC_ATTACK_PER_LEVEL;
            return true; // player level up?
        }
        return false; // player level up?
    }
    useHealthPotion() {
        while (true) {
            console.log(`\n\t You currently have: ${this.currentlyHealthPotions} health potions`);
            console.log(`\t Enter 0 to stop using health potions`);
            let healthPotionsToUse = Number((0, main_1.userInput)(chalk_1.default.bold.green("\t How many Health Potions you want to use: ")));
            if (healthPotionsToUse === 0)
                break;
            else if (healthPotionsToUse <= this.currentlyHealthPotions) {
                GameStatistics_1.default.totalHealthPotionsUsed += healthPotionsToUse;
                console.log("\n");
                while (healthPotionsToUse !== 0) {
                    const healthCure = Math.floor(Math.random() * GLOBAL_1.HEALTH_POTION_MAX_CURE) + GLOBAL_1.HEALTH_POTION_MIN_CURE;
                    this.lifePoints += healthCure;
                    if (this.lifePoints > this.maxLifePoints)
                        this.lifePoints = this.maxLifePoints;
                    this.currentlyHealthPotions -= 1;
                    console.log(`\t You healed ${healthCure} points of life!`);
                    healthPotionsToUse -= 1;
                }
            }
            else {
                console.log("\n\t You don't have sufficient health potions!");
            }
        }
    }
    useManaPotion() {
        while (true) {
            console.log(`\n\t You currently have: ${this.currentlyManaPotions} mana potions`);
            console.log("\t Enter 0 to STOP using mana potions");
            let manaPotionsToUse = Number((0, main_1.userInput)(chalk_1.default.bold.green("\t How many Mana Potions you want to use: ")));
            if (manaPotionsToUse === 0)
                break;
            else if (manaPotionsToUse <= this.currentlyManaPotions) {
                GameStatistics_1.default.totalManaPotionsUsed += manaPotionsToUse;
                console.log("\n");
                while (manaPotionsToUse !== 0) {
                    const manaCure = Math.floor(Math.random() * GLOBAL_1.MANA_POTION_MAX_CURE) + GLOBAL_1.MANA_POTION_MIN_CURE;
                    this.manaPoints += manaCure;
                    if (this.manaPoints > this.maxManaPoints)
                        this.manaPoints = this.maxManaPoints;
                    this.currentlyManaPotions -= 1;
                    console.log(`\t You healed ${manaCure} points of mana!`);
                    manaPotionsToUse -= 1;
                }
            }
            else {
                console.log("\n\t You dont have sufficient mana potions!");
            }
        }
    }
}
exports.default = Character;
