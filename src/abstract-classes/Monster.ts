import LivingBeing from "./LivingBeing";
import chalk from "chalk";
import { SELECTED_GAME_MODE } from "../functions/choose-game-mode";

interface MonsterInterface {
    experienceForKill: number;
    minLoot: number;
    maxLoot: number;
    type?: string;
    printMonsterRoundStatus(): void;
    takeDamage(playerDamage: number): void;
    lootAfterKill(): number;
}
export default abstract class Monster extends LivingBeing implements MonsterInterface {
    constructor(
        name: string,
        lifePoints: number,
        minAttack: number,
        maxAttack: number,
        public experienceForKill: number,
        public minLoot: number,
        public maxLoot: number,
        public type?: string,
    ) {
        super(name, lifePoints * SELECTED_GAME_MODE, minAttack * SELECTED_GAME_MODE, maxAttack * SELECTED_GAME_MODE);
        this.experienceForKill = experienceForKill;
        this.type = type ?? "normal";
    }

    printMonsterRoundStatus(): void {
        console.log(chalk.bold("\n--- MONSTER STATUS ---"));
        console.log(`Name: ${this.name}`);
        console.log(`Life: ${this.lifePoints}`);
    }

    takeDamage(playerDamage: number): void {
        this.lifePoints -= playerDamage;
        console.log(`Player Damage To Monster: ${playerDamage}`);
    }

    lootAfterKill(): number {
        return Math.floor(Math.random() * this.maxLoot) + this.minLoot;
    }
}
