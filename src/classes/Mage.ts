/* eslint-disable prettier/prettier */
import { PLAYER_MIN_ATTACK, PLAYER_MAX_ATTACK, MAGE_ADD_HEALTH_PER_LEVEL, MAGE_ADD_MANA_PER_LEVEL } from "../GLOBAL";
import Character from "./Character";

export default class Mage extends Character {
    constructor(playerName: string) {
        super(
            "Mage",
            playerName,
            PLAYER_MIN_ATTACK,
            PLAYER_MAX_ATTACK,
            MAGE_ADD_HEALTH_PER_LEVEL,
            MAGE_ADD_MANA_PER_LEVEL
        );
    }
}