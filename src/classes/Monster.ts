/* eslint-disable prettier/prettier */
import LivingBeing from './LivingBeing';

interface IMonster {
    experienceForKill: number;
    minLoot: number;
    maxLoot: number;
    lootAfterKill: number;
    printMonsterRoundStatus(): void;
    takeDamage(playerDamage: number): void;
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
        public lootAfterKill: number = 0
    ) {
        super(name, lifePoints, minAttack, maxAttack);
        this.experienceForKill = experienceForKill;
        this.lootAfterKill = Math.floor(Math.random() * maxLoot) + minLoot;
    }

    printMonsterRoundStatus(): void {
        console.log("\n\t --- MONSTER STATUS ---");
        console.log(`\t Name: ${this.name}`);
        console.log(`\t Life: ${this.lifePoints}`);
    }

    takeDamage(playerDamage: number): void {
        this.lifePoints -= playerDamage;
        console.log(`\t Player Damage: ${playerDamage}`);
    }
}
