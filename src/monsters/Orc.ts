import {
    ORC_LIFE_POINTS,
    ORC_MIN_ATTACK,
    ORC_MAX_ATTACK,
    ORC_EXPERIENCE_FOR_KILL,
    ORC_MIN_LOOT,
    ORC_MAX_LOOT,
} from "../envs";
import Monster from "../abstract-classes/Monster";

export default class Orc extends Monster {
    constructor() {
        super(
            "ORC",
            ORC_LIFE_POINTS,
            ORC_MIN_ATTACK,
            ORC_MAX_ATTACK,
            ORC_EXPERIENCE_FOR_KILL,
            ORC_MIN_LOOT,
            ORC_MAX_LOOT,
        );
    }
}
