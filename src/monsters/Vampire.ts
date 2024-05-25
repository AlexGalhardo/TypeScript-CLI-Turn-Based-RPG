import {
    VAMPIRE_LIFE_POINTS,
    VAMPIRE_MIN_ATTACK,
    VAMPIRE_MAX_ATTACK,
    VAMPIRE_EXPERIENCE_FOR_KILL,
    VAMPIRE_MIN_LOOT,
    VAMPIRE_MAX_LOOT,
} from "../envs";
import Monster from "../abstract-classes/Monster";

export default class Vampire extends Monster {
    constructor() {
        super(
            "VAMPIRE",
            VAMPIRE_LIFE_POINTS,
            VAMPIRE_MIN_ATTACK,
            VAMPIRE_MAX_ATTACK,
            VAMPIRE_EXPERIENCE_FOR_KILL,
            VAMPIRE_MIN_LOOT,
            VAMPIRE_MAX_LOOT,
        );
    }
}
