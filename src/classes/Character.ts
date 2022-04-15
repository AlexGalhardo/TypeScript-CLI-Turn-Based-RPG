/* eslint-disable prettier/prettier */
import { userInput } from "../game";
import GameStatistics from "./GameStatistics";

export default class Character {
    public currentlyLevel: number;
    public currentlyEXP: number;
    public expToNextLevel: number;
    public maxHealthPoints: number;
    public maxManaPoints: number;
    public currentlyHealthPoints: number;
    public currentlyManaPoints: number;
    public currentlyHealthPotions: number;
    public currentlyManaPotions: number;
    public currentlyGoldCoins: number;

    constructor(
        public vocation: string,
        public playerName: string,
        public minAttack: number,
        public maxAttack: number,
        public healthPointsPerLevel: number,
        public manaPointsPerLevel: number
    ) {
        this.vocation = vocation;
        this.playerName = playerName;

        this.currentlyLevel = 0;
        this.currentlyEXP = 0;
        this.expToNextLevel = 100;

        this.maxHealthPoints = 1000;
        this.maxManaPoints = 100;

        this.minAttack = minAttack;
        this.maxAttack = maxAttack;

        this.currentlyHealthPoints = 100;
        this.currentlyManaPoints = 100;

        this.healthPointsPerLevel = healthPointsPerLevel;
        this.manaPointsPerLevel = manaPointsPerLevel;

        this.currentlyHealthPotions = 0;
        this.currentlyManaPotions = 0;

        this.currentlyGoldCoins = 0;
    }

    getCharacterRoundStatus() {
        console.log("\n\t --- PLAYER STATUS ---");
        console.log(`\t Life: ${this.currentlyHealthPoints}`);
        console.log(`\t Mana: ${this.currentlyManaPoints}`);
        console.log(`\t Health Potions: ${this.currentlyHealthPoints}`);
        console.log(`\t Mana Potions: ${this.currentlyManaPotions}`);
    }

    isDead() {
        return this.currentlyHealthPoints <= 0;
    }

    attack() {
        return Math.floor(Math.random() * this.maxAttack) + this.minAttack;
    }

    useHealthPotion() {
        while (true) {
            console.log(`\n\t You currently have: ${this.currentlyHealthPoints} health potions`);
            console.log(`\t Enter 0 to stop use health potions`);
            let healthPotionsToUse = Number(userInput("\t How many Health Potions you want to use: "));
            if (healthPotionsToUse === 0) break;
            else if (healthPotionsToUse <= this.currentlyHealthPotions) {
                GameStatistics.totalHealthPotionsUsed += healthPotionsToUse;
                console.log("\n");
                while (healthPotionsToUse !== 0) {
                    const healthCure = Math.floor(Math.random() * 125) + 75;
                    this.currentlyHealthPoints += healthCure;
                    this.currentlyHealthPotions -= 1;
                    console.log(`\t You healed ${healthCure} points of life!`);
                    healthPotionsToUse -= 1;
                }
            } else {
                console.log("\n\t You dont have sufficient health potions!");
            }
        }
    }

    useManaPotion() {
        while (true) {
            console.log(`\n\t You currently have: ${this.currentlyManaPotions} mana potions`);
            console.log("\t Enter 0 to STOP use mana potions");
            let manaPotionsToUse = Number(
                userInput("\t How many Mana Potions you want to use: ")
            );
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
            } else {
                console.log("\n\t You dont have sufficient mana potions!");
            }
        }
    }

    takeDamage(monsterDamage: number): void {
        GameStatistics.totalDamageTakenFromMonsters += monsterDamage;
        this.currentlyHealthPoints -= monsterDamage;
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
}
