export interface ILivingBeing {
    name: string;
    lifePoints: number;
    minAttack: number;
    maxAttack: number;
    isDead(): boolean;
    attack(): number;
}

export default abstract class LivingBeing implements ILivingBeing {
    constructor(public name: string, public lifePoints: number, public minAttack: number, public maxAttack: number) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.minAttack = minAttack;
        this.maxAttack = maxAttack;
    }

    isDead(): boolean {
        return this.lifePoints <= 0;
    }

    attack(): number {
        return Math.floor(Math.random() * this.maxAttack) + this.minAttack;
    }
}