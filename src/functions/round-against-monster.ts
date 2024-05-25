import Character from "../abstract-classes/Character";
import Monster from "../abstract-classes/Monster";
import afterFight from "./after-fight";
import fightMonster from "./fight-monster";
import chalk from "chalk";

export default function roundAgainstMonster(player: Character, monster: Monster): boolean {
	while (true) {
		const playerStillAlive: boolean = fightMonster(player, monster);

		if (playerStillAlive) break;

		console.log(chalk.bold.red("\n\n... YOU ARE DEAD..."));
		console.log(chalk.bold.red("\n\n... GAME OVER ...\n\n"));
	}

	if (monster?.type !== "BOSS") afterFight(player, monster.name);

	return true;
}
