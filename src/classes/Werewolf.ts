
import { WEREWOLF_LIFE_POINTS, WEREWOLF_MIN_ATTACK, WEREWOLF_MAX_ATTACK, WEREWOLF_EXPERIENCE_FOR_KILL, WEREWOLF_MIN_LOOT, WEREWOLF_MAX_LOOT } from "../GLOBAL";
import Monster from "./Monster";

export default class Werewolf extends Monster {
    constructor() {
        super(
            "Werewolf",
            WEREWOLF_LIFE_POINTS,
            WEREWOLF_MIN_ATTACK,
            WEREWOLF_MAX_ATTACK,
            WEREWOLF_EXPERIENCE_FOR_KILL,
            WEREWOLF_MIN_LOOT,
            WEREWOLF_MAX_LOOT
        );
    }
}
