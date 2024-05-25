import {
	FERUMBRAS_LIFE_POINTS,
	FERUMBRAS_MIN_ATTACK,
	FERUMBRAS_MAX_ATTACK,
	FERUMBRAS_EXPERIENCE_FOR_KILL,
	FERUMBRAS_MIN_LOOT,
	FERUMBRAS_MAX_LOOT,
} from "../envs";
import Monster from "../abstract-classes/Monster";

export default class Ferumbras extends Monster {
	constructor() {
		super(
			"FERUMBRAS",
			FERUMBRAS_LIFE_POINTS,
			FERUMBRAS_MIN_ATTACK,
			FERUMBRAS_MAX_ATTACK,
			FERUMBRAS_EXPERIENCE_FOR_KILL,
			FERUMBRAS_MIN_LOOT,
			FERUMBRAS_MAX_LOOT,
			"BOSS", // monster type
		);
	}
}
