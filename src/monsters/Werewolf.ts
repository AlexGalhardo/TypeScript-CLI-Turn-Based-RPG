import {
	WEREWOLF_LIFE_POINTS,
	WEREWOLF_MIN_ATTACK,
	WEREWOLF_MAX_ATTACK,
	WEREWOLF_EXPERIENCE_FOR_KILL,
	WEREWOLF_MIN_LOOT,
	WEREWOLF_MAX_LOOT,
} from "../envs";
import Monster from "../abstract-classes/Monster";

export default class Werewolf extends Monster {
	constructor() {
		super(
			"WEREWOLF",
			WEREWOLF_LIFE_POINTS,
			WEREWOLF_MIN_ATTACK,
			WEREWOLF_MAX_ATTACK,
			WEREWOLF_EXPERIENCE_FOR_KILL,
			WEREWOLF_MIN_LOOT,
			WEREWOLF_MAX_LOOT,
		);
	}
}
