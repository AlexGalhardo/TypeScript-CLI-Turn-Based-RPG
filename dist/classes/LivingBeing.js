"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LivingBeing {
    constructor(name, lifePoints, minAttack, maxAttack) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.minAttack = minAttack;
        this.maxAttack = maxAttack;
        this.name = name;
        this.lifePoints = lifePoints;
        this.minAttack = minAttack;
        this.maxAttack = maxAttack;
    }
    isDead() {
        return this.lifePoints <= 0;
    }
    attack() {
        return Math.floor(Math.random() * this.maxAttack) + this.minAttack;
    }
}
exports.default = LivingBeing;
