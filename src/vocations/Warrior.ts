import {
    PLAYER_MIN_ATTACK,
    PLAYER_MAX_ATTACK,
    WARRIOR_ADD_HEALTH_PER_LEVEL,
    WARRIOR_ADD_MANA_PER_LEVEL,
    WARRIOR_REGENERATE_HEALTH_EACH_ROUND,
    WARRIOR_REGENERATE_MANA_EACH_ROUND,
} from "../envs";
import Character from "../abstract-classes/Character";

export default class Warrior extends Character {
    constructor(vocationName: string) {
        super(
            "WARRIOR",
            vocationName,
            PLAYER_MIN_ATTACK,
            PLAYER_MAX_ATTACK,
            WARRIOR_ADD_HEALTH_PER_LEVEL,
            WARRIOR_ADD_MANA_PER_LEVEL,
            WARRIOR_REGENERATE_HEALTH_EACH_ROUND,
            WARRIOR_REGENERATE_MANA_EACH_ROUND,
        );
    }
}
