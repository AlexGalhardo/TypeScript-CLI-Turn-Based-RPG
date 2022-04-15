/* eslint-disable prettier/prettier */

export default class Monster {
    constructor(
        public name: string,
        public lifePoints: number,
        public minAttack: number,
        public maxAttack: number,
        public experienceForKill: number,
        public mintLoot: number,
        public maxLoot: number,
        public lootAfterKill: number = 0
    ) {
        this.lifePoints = lifePoints;
        this.minAttack = minAttack;
        this.maxAttack = maxAttack;
        this.name = name;
        this.experienceForKill = experienceForKill;
        this.lootAfterKill = Math.floor(Math.random() * maxLoot) + mintLoot;
    }

    printMonsterRoundStatus() {
        console.log("\n\t --- MONSTER STATUS ---");
        console.log(`\t Name: ${this.name}`);
        console.log(`\t Life: ${this.lifePoints}`);
    }

    takeDamage(playerDamage: number): void {
        this.lifePoints -= playerDamage;
        console.log(`\t Player Damage: ${playerDamage}`);
    }

    isDead() {
        return this.lifePoints <= 0;
    }

    attack(): number {
        return Math.floor(Math.random() * this.maxAttack) + this.minAttack;
    }
}
