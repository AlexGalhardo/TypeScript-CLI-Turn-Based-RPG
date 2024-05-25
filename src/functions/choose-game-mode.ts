import { userInput } from "../start";
import chalk from "chalk";
import { GAME_MODE_EASY, GAME_MODE_NORMAL, GAME_MODE_HARD } from "../envs";

export let SELECTED_GAME_MODE: number = 0;

export default function chooseGameMode(): void {
	console.log(chalk.bold("\n\nTHESE ARE THE GAME MODES AVAILABLE TO CHOOSE: "));
	console.log("\nEnter [1] --> EASY --> Monsters have 50% LESS life and do 50% LESS damage");
	console.log("\nEnter [2] --> NORMAL");
	console.log("\nEnter [3] --> HARD --> Monsters have 50% MORE life and do 50% MORE damage\n");

	while (true) {
		let selectedGameMode = Number(userInput(chalk.bold.green("Choose your game mode: ")));

		if (selectedGameMode === 1) {
			SELECTED_GAME_MODE = GAME_MODE_EASY;
			break;
		} else if (selectedGameMode === 2) {
			SELECTED_GAME_MODE = GAME_MODE_NORMAL;
			break;
		} else if (selectedGameMode === 3) {
			SELECTED_GAME_MODE = GAME_MODE_HARD;
			break;
		}
	}
}
