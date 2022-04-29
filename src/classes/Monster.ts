import LivingBeing from './LivingBeing';
import chalk from 'chalk';
import { SELECTED_GAME_MODE } from "../functions/chooseGameMode";

interface IMonster {
    experienceForKill: number;
    minLoot: number;
    maxLoot: number;
    type?: string;
    printMonsterRoundStatus(): void;
    takeDamage(playerDamage: number): void;
    lootAfterKill(): number;
}
export default abstract class Monster extends LivingBeing implements IMonster {
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
        super(name, lifePoints * SELECTED_GAME_MODE, minAttack, maxAttack);
        this.experienceForKill = experienceForKill;
        this.type = type ?? 'normal';
    }

    printMonsterRoundStatus(): void {
        console.log(chalk.bold("\n\t --- MONSTER STATUS ---"));
        console.log(`\t Name: ${this.name}`);
        console.log(`\t Life: ${this.lifePoints}`);
    }

    takeDamage(playerDamage: number): void {
        this.lifePoints -= playerDamage;
        console.log(`\t Player Damage To Monster: ${playerDamage}`);
    }

    lootAfterKill(): number {
        return Math.floor(Math.random() * this.maxLoot) + this.minLoot;
    }
}
