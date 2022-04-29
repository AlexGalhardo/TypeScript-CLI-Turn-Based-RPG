"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GLOBAL_1 = require("../GLOBAL");
const Monster_1 = __importDefault(require("./Monster"));
class Werewolf extends Monster_1.default {
    constructor() {
        super("WEREWOLF", GLOBAL_1.WEREWOLF_LIFE_POINTS, GLOBAL_1.WEREWOLF_MIN_ATTACK, GLOBAL_1.WEREWOLF_MAX_ATTACK, GLOBAL_1.WEREWOLF_EXPERIENCE_FOR_KILL, GLOBAL_1.WEREWOLF_MIN_LOOT, GLOBAL_1.WEREWOLF_MAX_LOOT);
    }
}
exports.default = Werewolf;
