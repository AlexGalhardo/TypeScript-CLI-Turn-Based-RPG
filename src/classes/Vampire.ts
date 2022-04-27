
import { VAMPIRE_LIFE_POINTS, VAMPIRE_MIN_ATTACK, VAMPIRE_MAX_ATTACK, VAMPIRE_EXPERIENCE_FOR_KILL, VAMPIRE_MIN_LOOT, VAMPIRE_MAX_LOOT } from "../GLOBAL";
import Monster from "./Monster";

export default class Vampire extends Monster {
    constructor() {
        super(
            "Vampire",
            VAMPIRE_LIFE_POINTS,
            VAMPIRE_MIN_ATTACK,
            VAMPIRE_MAX_ATTACK,
            VAMPIRE_EXPERIENCE_FOR_KILL,
            VAMPIRE_MIN_LOOT,
            VAMPIRE_MAX_LOOT
        );
    }
}
