/* eslint-disable prettier/prettier */

export default class Monster {
    constructor(
        public name: string,
        public healthPoints: number,
        public minAttack: number,
        public maxAttack: number,
        public experienceForKill: number,
        public mintLoot: number,
        public maxLoot: number,
        public lootAfterKill: number = 0
    ) {
        this.healthPoints = healthPoints;
        this.minAttack = minAttack;
        this.maxAttack = maxAttack;
        this.name = name;
        this.experienceForKill = experienceForKill;
        this.lootAfterKill = Math.floor(Math.random() * maxLoot) + mintLoot;
    }

    takeDamage(playerDamage: number): void {
        this.healthPoints -= playerDamage;
        console.log(`\t Player Damage: ${playerDamage}`);
    }

    isDead() {
        return this.healthPoints <= 0;
    }

    attack(): number {
        return Math.floor(Math.random() * this.maxAttack) + this.minAttack;
    }

    printMonsterRoundStatus(): void { }
}
