import {
    PLAYER_MIN_ATTACK,
    PLAYER_MAX_ATTACK,
    ARCHER_ADD_HEALTH_PER_LEVEL,
    ARCHER_ADD_MANA_PER_LEVEL,
    ARCHER_REGENERATE_HEALTH_EACH_ROUND,
    ARCHER_REGENERATE_MANA_EACH_ROUND,
} from "../GLOBAL";
import Character from "./Character";

export default class Archer extends Character {
    constructor(playerName: string) {
        super(
            "ARCHER",
            playerName,
            PLAYER_MIN_ATTACK,
            PLAYER_MAX_ATTACK,
            ARCHER_ADD_HEALTH_PER_LEVEL,
            ARCHER_ADD_MANA_PER_LEVEL,
            ARCHER_REGENERATE_HEALTH_EACH_ROUND,
            ARCHER_REGENERATE_MANA_EACH_ROUND,
        );
    }
}
