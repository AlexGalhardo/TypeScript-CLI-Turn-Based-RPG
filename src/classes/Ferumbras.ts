/* eslint-disable prettier/prettier */
import { FERUMBRAS_HEALTH_POINTS, FERUMBRAS_MIN_ATTACK, FERUMBRAS_MAX_ATTACK, FERUMBRAS_EXPERIENCE_FOR_KILL, FERUMBRAS_MIN_LOOT, FERUMBRAS_MAX_LOOT } from "../GLOBAL";
import Monster from "./Monster";

export default class Ferumbras extends Monster {
    constructor() {
        super(
            "Ferumbras",
            FERUMBRAS_HEALTH_POINTS,
            FERUMBRAS_MIN_ATTACK,
            FERUMBRAS_MAX_ATTACK,
            FERUMBRAS_EXPERIENCE_FOR_KILL,
            FERUMBRAS_MIN_LOOT,
            FERUMBRAS_MAX_LOOT
        );
    }
}
