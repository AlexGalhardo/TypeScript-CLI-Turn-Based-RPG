"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GLOBAL_1 = require("../GLOBAL");
const Monster_1 = __importDefault(require("./Monster"));
class Vampire extends Monster_1.default {
    constructor() {
        super("Vampire", GLOBAL_1.VAMPIRE_LIFE_POINTS, GLOBAL_1.VAMPIRE_MIN_ATTACK, GLOBAL_1.VAMPIRE_MAX_ATTACK, GLOBAL_1.VAMPIRE_EXPERIENCE_FOR_KILL, GLOBAL_1.VAMPIRE_MIN_LOOT, GLOBAL_1.VAMPIRE_MAX_LOOT);
    }
}
exports.default = Vampire;
