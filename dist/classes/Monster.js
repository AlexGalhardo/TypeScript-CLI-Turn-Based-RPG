"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LivingBeing_1 = __importDefault(require("./LivingBeing"));
const chalk_1 = __importDefault(require("chalk"));
class Monster extends LivingBeing_1.default {
    constructor(name, lifePoints, minAttack, maxAttack, experienceForKill, minLoot, maxLoot, type) {
        super(name, lifePoints, minAttack, maxAttack);
        this.experienceForKill = experienceForKill;
        this.minLoot = minLoot;
        this.maxLoot = maxLoot;
        this.type = type;
        this.experienceForKill = experienceForKill;
        this.type = type !== null && type !== void 0 ? type : 'normal';
    }
    printMonsterRoundStatus() {
        console.log(chalk_1.default.bold("\n\t --- MONSTER STATUS ---"));
        console.log(`\t Name: ${this.name}`);
        console.log(`\t Life: ${this.lifePoints}`);
    }
    takeDamage(playerDamage) {
        this.lifePoints -= playerDamage;
        console.log(`\t Player Damage: ${playerDamage}`);
    }
    lootAfterKill() {
        return Math.floor(Math.random() * this.maxLoot) + this.minLoot;
    }
}
exports.default = Monster;
