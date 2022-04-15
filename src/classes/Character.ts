/* eslint-disable prettier/prettier */
import { PLAYER_MAX_ATTACK, PLAYER_MIN_ATTACK, PLAYER_START_LIFE_POINTS } from "../GLOBAL";
import { userInput } from "../main";
import GameStatistics from "./GameStatistics";
import LivingBeing, { ILivingBeing } from "./LivingBeing";

interface ICharacter extends ILivingBeing {
    currentlyLevel: number;
    currentlyEXP: number;
    expToNextLevel: number;
    maxLifePoints: number;
    maxManaPoints: number;
    currentlyManaPoints: number;
    currentlyHealthPotions: number;
    currentlyManaPotions: number;
    currentlyGoldCoins: number;
    takeDamage(monsterDamage: number): void;
    printCharacterRoundStatus(): void;
    getLootMonster(lootMonster: number): void;
    getMonsterExperience(experienceMonster: number): void;
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
    public currentlyManaPoints: number;
    public currentlyHealthPotions: number;
    public currentlyManaPotions: number;
    public currentlyGoldCoins: number;

    constructor(
        public vocation: string,
        public name: string,
        public minAttack: number,
        public maxAttack: number,
        public LifePointsPerLevel: number,
        public manaPointsPerLevel: number
    ) {
        super(name, PLAYER_START_LIFE_POINTS, PLAYER_MIN_ATTACK, PLAYER_MAX_ATTACK);

        this.vocation = vocation;
        this.name = name;

        this.currentlyLevel = 0;
        this.currentlyEXP = 0;
        this.expToNextLevel = 100;

        this.maxLifePoints = 1000;
        this.maxManaPoints = 100;

        this.minAttack = minAttack;
        this.maxAttack = maxAttack;

        this.currentlyManaPoints = 100;

        this.LifePointsPerLevel = LifePointsPerLevel;
        this.manaPointsPerLevel = manaPointsPerLevel;

        this.currentlyHealthPotions = 0;
        this.currentlyManaPotions = 0;

        this.currentlyGoldCoins = 0;
    }

    printCharacterRoundStatus() {
        console.log("\n\t --- PLAYER STATUS ---");
        console.log(`\t Life: ${this.lifePoints}`);
        console.log(`\t Mana: ${this.currentlyManaPoints}`);
        console.log(`\t Health Potions: ${this.currentlyHealthPotions}`);
        console.log(`\t Mana Potions: ${this.currentlyManaPotions}`);
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

    getMonsterExperience(experienceMonster: number): void {
        this.currentlyEXP += experienceMonster;
    }

    usedGoldCoinsInNPC(usedGoldCoinsInNPC: number): void {
        GameStatistics.totalGoldCoinsUsed += usedGoldCoinsInNPC;
        this.currentlyGoldCoins -= usedGoldCoinsInNPC;
    }

    addHealthPotions(healthPotions: number): void {
        this.currentlyHealthPotions += healthPotions
    }

    addManaPotions(manaPotions: number): void {
        this.currentlyManaPoints += manaPotions
    }

    useHealthPotion(): void {

        while (true) {

            console.log(`\n\t You currently have: ${this.currentlyHealthPotions} health potions`);
            console.log(`\t Enter 0 to stop use health potions`);

            let healthPotionsToUse = Number(userInput("\t How many Health Potions you want to use: "));

            if (healthPotionsToUse === 0) break;

            else if (healthPotionsToUse <= this.currentlyHealthPotions) {
                GameStatistics.totalHealthPotionsUsed += healthPotionsToUse;
                console.log("\n");

                while (healthPotionsToUse !== 0) {
                    const healthCure = Math.floor(Math.random() * 125) + 75;
                    this.lifePoints += healthCure;
                    this.currentlyHealthPotions -= 1;
                    console.log(`\t You healed ${healthCure} points of life!`);
                    healthPotionsToUse -= 1;
                }
            }
            else {
                console.log("\n\t You dont have sufficient health potions!");
            }
        }
    }

    useManaPotion(): void {

        while (true) {

            console.log(`\n\t You currently have: ${this.currentlyManaPotions} mana potions`);
            console.log("\t Enter 0 to STOP use mana potions");

            let manaPotionsToUse = Number(userInput("\t How many Mana Potions you want to use: "));

            if (manaPotionsToUse === 0) break;

            else if (manaPotionsToUse <= this.currentlyManaPotions) {

                GameStatistics.totalManaPotionsUsed += manaPotionsToUse;

                console.log("\n");

                while (manaPotionsToUse !== 0) {
                    const manaCure = Math.floor(Math.random() * 125) + 75;
                    this.currentlyManaPoints += manaCure;
                    this.currentlyManaPotions -= 1;
                    console.log(`\t You healed ${manaCure} points of life!`);
                    manaPotionsToUse -= 1;
                }
            }
            else {
                console.log("\n\t You dont have sufficient mana potions!");
            }
        }
    }
}