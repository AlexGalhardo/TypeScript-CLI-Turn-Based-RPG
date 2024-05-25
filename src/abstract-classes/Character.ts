import {
	EXP_TO_LEVEL_UP,
	PLAYER_MAX_ATTACK,
	PLAYER_MIN_ATTACK,
	PLAYER_START_LIFE_POINTS,
	PLAYER_START_MANA_POINTS,
	ADD_WARRIOR_ATTACK_PER_LEVEL,
	ADD_MAGE_ATTACK_PER_LEVEL,
	ADD_ARCHER_ATTACK_PER_LEVEL,
	PLAYER_MIN_MAGIC_ATTACK,
	PLAYER_MAX_MAGIC_ATTACK,
	ADD_WARRIOR_MAGIC_ATTACK_PER_LEVEL,
	ADD_ARCHER_MAGIC_ATTACK_PER_LEVEL,
	ADD_MAGE_MAGIC_ATTACK_PER_LEVEL,
	HEALTH_POTION_MAX_CURE,
	HEALTH_POTION_MIN_CURE,
	MANA_POTION_MAX_CURE,
	MANA_POTION_MIN_CURE,
	PLAYER_STRONG_SPELL_MANA_COST,
	PLAYER_WEAK_SPELL_MANA_COST,
} from "../envs";
import { userInput } from "../start";
import GameStatistics from "../utils/game-statistics";
import LivingBeing, { LivingBeingInterface } from "./LivingBeing";
import chalk from "chalk";

interface CharacterInterface extends LivingBeingInterface {
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

export default abstract class Character extends LivingBeing implements CharacterInterface {
	public currentlyLevel: number;
	public currentlyEXP: number;
	public expToNextLevel: number;
	public maxLifePoints: number;
	public maxManaPoints: number;
	public manaPoints: number;
	public currentlyHealthPotions: number;
	public currentlyManaPotions: number;
	public currentlyGoldCoins: number;
	public minMagicAttack: number;
	public maxMagicAttack: number;

	constructor(
		public vocation: string,
		public name: string,
		public minAttack: number,
		public maxAttack: number,
		public addLifePointsPerLevel: number,
		public addManaPointsPerLevel: number,
		public regenerateLifePointsPerRound: number,
		public regenerateManaPointsPerRound: number,
	) {
		super(name, PLAYER_START_LIFE_POINTS, PLAYER_MIN_ATTACK, PLAYER_MAX_ATTACK);

		this.vocation = vocation;
		this.name = name;

		this.currentlyLevel = 1;
		this.currentlyEXP = 0;
		this.expToNextLevel = EXP_TO_LEVEL_UP[2];

		this.maxLifePoints = PLAYER_START_LIFE_POINTS;
		this.maxManaPoints = PLAYER_START_MANA_POINTS;

		this.minMagicAttack = PLAYER_MIN_MAGIC_ATTACK;
		this.maxMagicAttack = PLAYER_MAX_MAGIC_ATTACK;

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
		console.log(chalk.bold("\n--- PLAYER STATUS ---"));
		console.log(chalk.bold.red(`Life: ${this.lifePoints}`) + ` / ${this.maxLifePoints}`);
		console.log(`Mana: ${this.manaPoints} / ${this.maxManaPoints}`);
		console.log(`Health Potions: ${this.currentlyHealthPotions}`);
		console.log(`Mana Potions: ${this.currentlyManaPotions}`);
		console.log(`Regenerated: ${this.regenerateLifePointsPerRound} points of life!`);
		console.log(`Regenerated: ${this.regenerateManaPointsPerRound} points of mana!`);
	}

	takeDamage(monsterDamage: number): void {
		GameStatistics.totalDamageTakenFromMonsters += monsterDamage;
		this.lifePoints -= monsterDamage;
		console.log(`Monster Damage To Player: ${monsterDamage}`);
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
		this.currentlyHealthPotions += healthPotions;
	}

	addManaPotions(manaPotions: number): void {
		this.currentlyManaPotions += manaPotions;
	}

	regenerateEachRound(): void {
		this.lifePoints += this.regenerateLifePointsPerRound;
		this.manaPoints += this.regenerateManaPointsPerRound;
	}

	useWeakMagicSpell(): number {
		this.manaPoints -= PLAYER_WEAK_SPELL_MANA_COST;
		return (Math.floor(Math.random() * this.maxMagicAttack) + this.minMagicAttack) * 1.25;
	}

	useStrongMagicSpell(): number {
		this.manaPoints -= PLAYER_STRONG_SPELL_MANA_COST;
		return (Math.floor(Math.random() * this.maxMagicAttack) + this.minMagicAttack) * 2;
	}

	verifyAndUpdateLevelStatus(): boolean {
		if (this.currentlyEXP < this.expToNextLevel) {
			return false;
		}

		this.currentlyLevel++;
		this.expToNextLevel = EXP_TO_LEVEL_UP[this.currentlyLevel];
		this.maxLifePoints += this.addLifePointsPerLevel;
		this.maxManaPoints += this.addManaPointsPerLevel;

		const attackIncrease = {
			WARRIOR: ADD_WARRIOR_ATTACK_PER_LEVEL,
			ARCHER: ADD_ARCHER_ATTACK_PER_LEVEL,
			MAGE: ADD_MAGE_ATTACK_PER_LEVEL
		}[this.vocation];

		const magicAttackIncrease = {
			WARRIOR: ADD_WARRIOR_MAGIC_ATTACK_PER_LEVEL,
			ARCHER: ADD_ARCHER_MAGIC_ATTACK_PER_LEVEL,
			MAGE: ADD_MAGE_MAGIC_ATTACK_PER_LEVEL
		}[this.vocation];

		this.minAttack += attackIncrease;
		this.maxAttack += attackIncrease;
		this.minMagicAttack += magicAttackIncrease;
		this.maxMagicAttack += magicAttackIncrease;

		return true;
	}

	useHealthPotion(): void {
		while (true) {
			console.log(`\nYou currently have: ${this.currentlyHealthPotions} health potions`);
			console.log(`Enter 0 to stop using health potions`);

			let healthPotionsToUse = Number(
				userInput(chalk.bold.green("How many Health Potions you want to use: ")),
			);

			if (healthPotionsToUse === 0) break;
			else if (healthPotionsToUse <= this.currentlyHealthPotions) {
				GameStatistics.totalHealthPotionsUsed += healthPotionsToUse;
				console.log("\n");

				while (healthPotionsToUse !== 0) {
					const healthCure = Math.floor(Math.random() * HEALTH_POTION_MAX_CURE) + HEALTH_POTION_MIN_CURE;
					this.lifePoints += healthCure;
					if (this.lifePoints > this.maxLifePoints) this.lifePoints = this.maxLifePoints;
					this.currentlyHealthPotions -= 1;
					console.log(`You healed ${healthCure} points of life!`);
					healthPotionsToUse -= 1;
				}
			} else {
				console.log("\nYou don't have sufficient health potions!");
			}
		}
	}

	useManaPotion(): void {
		while (true) {
			console.log(`\nYou currently have: ${this.currentlyManaPotions} mana potions`);
			console.log("Enter 0 to STOP using mana potions");

			let manaPotionsToUse = Number(userInput(chalk.bold.green("How many Mana Potions you want to use: ")));

			if (manaPotionsToUse === 0) break;
			else if (manaPotionsToUse <= this.currentlyManaPotions) {
				GameStatistics.totalManaPotionsUsed += manaPotionsToUse;

				console.log("\n");

				while (manaPotionsToUse !== 0) {
					const manaCure = Math.floor(Math.random() * MANA_POTION_MAX_CURE) + MANA_POTION_MIN_CURE;
					this.manaPoints += manaCure;
					if (this.manaPoints > this.maxManaPoints) this.manaPoints = this.maxManaPoints;
					this.currentlyManaPotions -= 1;
					console.log(`You healed ${manaCure} points of mana!`);
					manaPotionsToUse -= 1;
				}
			} else {
				console.log("\nYou dont have sufficient mana potions!");
			}
		}
	}
}
