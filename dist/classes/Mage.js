"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GLOBAL_1 = require("../GLOBAL");
const Character_1 = __importDefault(require("./Character"));
class Mage extends Character_1.default {
    constructor(playerName) {
        super("Mage", playerName, GLOBAL_1.PLAYER_MIN_ATTACK, GLOBAL_1.PLAYER_MAX_ATTACK, GLOBAL_1.MAGE_ADD_HEALTH_PER_LEVEL, GLOBAL_1.MAGE_ADD_MANA_PER_LEVEL, GLOBAL_1.MAGE_REGENERATE_HEALTH_EACH_ROUND, GLOBAL_1.MAGE_REGENERATE_MANA_EACH_ROUND);
    }
}
exports.default = Mage;
