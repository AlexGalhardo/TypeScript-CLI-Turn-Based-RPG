/* eslint-disable prettier/prettier */
import { PLAYER_MIN_ATTACK, PLAYER_MAX_ATTACK, WARRIOR_ADD_HEALTH_PER_LEVEL, WARRIOR_ADD_MANA_PER_LEVEL } from "../GLOBAL";
import Character from "./Character";

export default class Warrior extends Character {
    constructor(playerName: string) {
        super(
            "Warrior",
            playerName,
            PLAYER_MIN_ATTACK,
            PLAYER_MAX_ATTACK,
            WARRIOR_ADD_HEALTH_PER_LEVEL,
            WARRIOR_ADD_MANA_PER_LEVEL
        );
    }
}