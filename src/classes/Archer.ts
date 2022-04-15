/* eslint-disable prettier/prettier */
import { PLAYER_MIN_ATTACK, PLAYER_MAX_ATTACK, MAGE_ADD_HEALTH_PER_LEVEL, MAGE_ADD_MANA_PER_LEVEL } from "../GLOBAL";
import Character from "./Character";

export default class Archer extends Character {
    constructor(playerName: string) {
        super(
            "Archer",
            playerName,
            NORMAL_MIN_ATTACK,
            NORMAL_MAX_ATTACK,
            ARCHER_ADD_HEALTH_PER_LEVEL,
            ARCHER_ADD_MANA_PER_LEVEL
        );
    }
}