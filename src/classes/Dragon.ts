import { DRAGON_LIFE_POINTS, DRAGON_MIN_ATTACK, DRAGON_MAX_ATTACK, DRAGON_EXPERIENCE_FOR_KILL, DRAGON_MIN_LOOT, DRAGON_MAX_LOOT } from "../GLOBAL";
import Monster from "./Monster";

export default class Dragon extends Monster {
    constructor() {
        super(
            "DRAGON",
            DRAGON_LIFE_POINTS,
            DRAGON_MIN_ATTACK,
            DRAGON_MAX_ATTACK,
            DRAGON_EXPERIENCE_FOR_KILL,
            DRAGON_MIN_LOOT,
            DRAGON_MAX_LOOT
        );
    }
}
