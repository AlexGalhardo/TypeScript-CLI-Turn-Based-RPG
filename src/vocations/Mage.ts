import {
    PLAYER_MIN_ATTACK,
    PLAYER_MAX_ATTACK,
    MAGE_ADD_HEALTH_PER_LEVEL,
    MAGE_ADD_MANA_PER_LEVEL,
    MAGE_REGENERATE_HEALTH_EACH_ROUND,
    MAGE_REGENERATE_MANA_EACH_ROUND,
} from "../envs";
import Character from "../abstract-classes/Character";

export default class Mage extends Character {
    constructor(playerName: string) {
        super(
            "MAGE",
            playerName,
            PLAYER_MIN_ATTACK,
            PLAYER_MAX_ATTACK,
            MAGE_ADD_HEALTH_PER_LEVEL,
            MAGE_ADD_MANA_PER_LEVEL,
            MAGE_REGENERATE_HEALTH_EACH_ROUND,
            MAGE_REGENERATE_MANA_EACH_ROUND,
        );
    }
}
