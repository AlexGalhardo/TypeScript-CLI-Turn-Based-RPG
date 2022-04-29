"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GLOBAL_1 = require("../GLOBAL");
const Monster_1 = __importDefault(require("./Monster"));
class Ferumbras extends Monster_1.default {
    constructor() {
        super("FERUMBRAS", GLOBAL_1.FERUMBRAS_LIFE_POINTS, GLOBAL_1.FERUMBRAS_MIN_ATTACK, GLOBAL_1.FERUMBRAS_MAX_ATTACK, GLOBAL_1.FERUMBRAS_EXPERIENCE_FOR_KILL, GLOBAL_1.FERUMBRAS_MIN_LOOT, GLOBAL_1.FERUMBRAS_MAX_LOOT, 'BOSS' // monster type
        );
    }
}
exports.default = Ferumbras;
