import GameStatistics from "../utils/game-statistics";
import { userInput } from "../start";
import createPlayerCharacter from "./create-player-character";
import gameIntroduction from "./game-introduction";
import startGameplay from "./start-gameplay";
import chooseGameMode from "./choose-game-mode";
import chalk from "chalk";

export default async function startGame() {
	gameIntroduction();

	while (true) {
		console.log("\n");

		const player = createPlayerCharacter();

		chooseGameMode();

		startGameplay(player);

		console.log(chalk.bold.yellow("\n-------- GAME STATISTICS --------"));
		console.log(`Total Gold Coins Looted = ${GameStatistics.totalGoldCoinsLooted}`);
		console.log(`Total Gold Coins Used = ${GameStatistics.totalGoldCoinsUsed}`);
		console.log(`Total Health Potions Bought = ${GameStatistics.totalHealthPotionsBought}`);
		console.log(`Total Mana Potions Bought = ${GameStatistics.totalManaPotionsBought}`);
		console.log(`Total Health Potions Used = ${GameStatistics.totalHealthPotionsUsed}`);
		console.log(`Total Mana Potions Used = ${GameStatistics.totalManaPotionsUsed}`);
		console.log(`Total Normal Attack sUsed = ${GameStatistics.totalNormalAttacksUsed}`);
		console.log(`Total Damage Dealt ToMonsters = ${GameStatistics.totalDamageDealtToMonsters}`);
		console.log(`Total Damage Taken From Monsters = ${GameStatistics.totalDamageTakenFromMonsters}`);

		console.log("\n\nDo you wanna play again?");
		console.log("Enter [1] --> YES");
		console.log("Enter [2] --> NO");
		const playAgain = Number(userInput("Play again: "));

		if (playAgain === 1) {
			continue;
		} else {
			break;
		}
	}

	console.log(`\n\nBye. Come Back Later! :D\n\n`);
}
