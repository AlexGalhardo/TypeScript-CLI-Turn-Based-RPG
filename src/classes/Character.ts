import { expToLevelUp, PLAYER_MAX_ATTACK, PLAYER_MIN_ATTACK, PLAYER_START_LIFE_POINTS, PLAYER_START_MANA_POINTS, ADD_PLAYER_ATTACK_PER_LEVEL } from "../GLOBAL";
import { userInput } from "../main";
import GameStatistics from "./GameStatistics";
import LivingBeing, { ILivingBeing } from "./LivingBeing";
import chalk from 'chalk';

interface ICharacter extends ILivingBeing {
    currentlyLevel: number;
    currentlyEXP: number;
    expToNextLevel: number;
    maxLifePoints: number;
    maxManaPoints: number;
    manaPoints: number;
    addLifePointsPerLevel: number;
    addManaPointsPerLevel: number;
    regenerateLifePointsPerRound: number;
    regenerateManaPointsPerRound: number;
    currentlyHealthPotions: number;
    currentlyManaPotions: number;
    currentlyGoldCoins: number;
    takeDamage(monsterDamage: number): void;
    printCharacterRoundStatus(): void;
    getLootMonster(lootMonster: number): void;
    getMonsterExperience(experienceMonster: number): void;
    verifyAndUpdateLevelStatus(): boolean;
    usedGoldCoinsInNPC(usedGoldCoinsInNPC: number): void;
    addHealthPotions(healthPotions: number): void;
    addManaPotions(manaPotions: number): void;
    useHealthPotion(): void;
    useManaPotion(): void;
}

export default abstract class Character extends LivingBeing implements ICharacter {
    public currentlyLevel: number;
    public currentlyEXP: number;
    public expToNextLevel: number;
    public maxLifePoints: number;
    public maxManaPoints: number;
    public manaPoints: number;
    public currentlyHealthPotions: number;
    public currentlyManaPotions: number;
    public currentlyGoldCoins: number;

    constructor(
        public vocation: string,
        public name: string,
        public minAttack: number,
        public maxAttack: number,
        public addLifePointsPerLevel: number,
        public addManaPointsPerLevel: number,
        public regenerateLifePointsPerRound: number,
        public regenerateManaPointsPerRound: number
    ) {
        super(name, PLAYER_START_LIFE_POINTS, PLAYER_MIN_ATTACK, PLAYER_MAX_ATTACK);

        this.vocation = vocation;
        this.name = name;

        this.currentlyLevel = 1;
        this.currentlyEXP = 0;
        this.expToNextLevel = 100;

        this.maxLifePoints = 1000;
        this.maxManaPoints = 100;

        this.minAttack = minAttack;
        this.maxAttack = maxAttack;

        this.manaPoints = PLAYER_START_MANA_POINTS;

        this.addLifePointsPerLevel = addLifePointsPerLevel;
        this.addManaPointsPerLevel = addManaPointsPerLevel;

        this.regenerateLifePointsPerRound = regenerateLifePointsPerRound;
        this.regenerateManaPointsPerRound = regenerateManaPointsPerRound;

        this.currentlyHealthPotions = 0;
        this.currentlyManaPotions = 0;

        this.currentlyGoldCoins = 0;
    }

    printCharacterRoundStatus() {
        console.log(chalk.bold("\n\t --- PLAYER STATUS ---"));
        console.log(chalk.bold.red(`\t Life: ${this.lifePoints}`));
        console.log(`\t Mana: ${this.manaPoints}`);
        console.log(`\t Health Potions: ${this.currentlyHealthPotions}`);
        console.log(`\t Mana Potions: ${this.currentlyManaPotions}`);
        console.log(`\t Regenerated: ${this.regenerateLifePointsPerRound} points of life!`);
        console.log(`\t Regenerated: ${this.regenerateManaPointsPerRound} points of mana!`);
    }

    takeDamage(monsterDamage: number): void {
        GameStatistics.totalDamageTakenFromMonsters += monsterDamage;
        this.lifePoints -= monsterDamage;
        console.log(`\t Monster Damage: ${monsterDamage}`);
    }

    getLootMonster(lootMonster: number): void {
        GameStatistics.totalGoldCoinsLooted += lootMonster;
        this.currentlyGoldCoins += lootMonster;
    }

    getMonsterExperience(experienceGainedFromMonster: number): void {
        this.currentlyEXP += experienceGainedFromMonster;
    }

    usedGoldCoinsInNPC(usedGoldCoinsInNPC: number): void {
        GameStatistics.totalGoldCoinsUsed += usedGoldCoinsInNPC;
        this.currentlyGoldCoins -= usedGoldCoinsInNPC;
    }

    addHealthPotions(healthPotions: number): void {
        this.currentlyHealthPotions += healthPotions
    }

    addManaPotions(manaPotions: number): void {
        this.currentlyManaPotions += manaPotions
    }

    regenerateEachRound(): void {
        this.lifePoints += this.regenerateLifePointsPerRound;
        this.manaPoints += this.regenerateManaPointsPerRound;
    }

    verifyAndUpdateLevelStatus(): boolean {
        if (this.currentlyEXP >= this.expToNextLevel) {
            this.currentlyLevel++;
            this.expToNextLevel === expToLevelUp[this.currentlyLevel];
            this.maxLifePoints += this.addLifePointsPerLevel;
            this.maxManaPoints += this.addManaPointsPerLevel;
            this.minAttack += ADD_PLAYER_ATTACK_PER_LEVEL;
            this.maxAttack += ADD_PLAYER_ATTACK_PER_LEVEL;
            return true
        }

        return false
    }

    useHealthPotion(): void {

        while (true) {

            console.log(`\n\t You currently have: ${this.currentlyHealthPotions} health potions`);
            console.log(`\t Enter 0 to stop using health potions`);

            let healthPotionsToUse = Number(userInput("\t How many Health Potions you want to use: "));

            if (healthPotionsToUse === 0) break;

            else if (healthPotionsToUse <= this.currentlyHealthPotions) {
                GameStatistics.totalHealthPotionsUsed += healthPotionsToUse;
                console.log("\n");

                while (healthPotionsToUse !== 0) {
                    const healthCure = Math.floor(Math.random() * 125) + 75;
                    this.lifePoints += healthCure;
                    if (this.lifePoints > this.maxLifePoints) this.lifePoints = this.maxLifePoints;
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

    useManaPotion(): void {

        while (true) {

            console.log(`\n\t You currently have: ${this.currentlyManaPotions} mana potions`);
            console.log("\t Enter 0 to STOP using mana potions");

            let manaPotionsToUse = Number(userInput("\t How many Mana Potions you want to use: "));

            if (manaPotionsToUse === 0) break;

            else if (manaPotionsToUse <= this.currentlyManaPotions) {

                GameStatistics.totalManaPotionsUsed += manaPotionsToUse;

                console.log("\n");

                while (manaPotionsToUse !== 0) {
                    const manaCure = Math.floor(Math.random() * 125) + 75;
                    this.manaPoints += manaCure;
                    if (this.manaPoints > this.maxManaPoints) this.manaPoints = this.maxManaPoints;
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