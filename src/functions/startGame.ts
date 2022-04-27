import GameStatistics from "../classes/GameStatistics";
import { userInput } from "../main";
import createPlayerCharacter from "./createPlayerCharacter";
import gameIntroduction from "./gameIntroduction";
import startGameplay from "./startGameplay";
import chalk from 'chalk';


export default async function startGame() {

    gameIntroduction();

    while (true) {

        console.log("\n");

        const player = createPlayerCharacter();

        startGameplay(player);

        console.log(chalk.bold.black('\n\t -------- GAME STATISTICS --------'));
        console.log(`\n\t totalGoldCoinsLooted = ${GameStatistics.totalGoldCoinsLooted}`);
        console.log(`\n\t totalGoldCoinsUsed = ${GameStatistics.totalGoldCoinsUsed}`);
        console.log(`\n\t totalHealthPotionsBought = ${GameStatistics.totalHealthPotionsBought}`);
        console.log(`\n\t totalManaPotionsBought = ${GameStatistics.totalManaPotionsBought}`);
        console.log(`\n\t totalHealthPotionsUsed = ${GameStatistics.totalHealthPotionsUsed}`);
        console.log(`\n\t totalManaPotionsUsed = ${GameStatistics.totalManaPotionsUsed}`);
        console.log(`\n\t totalNormalAttacksUsed = ${GameStatistics.totalNormalAttacksUsed}`);
        console.log(`\n\t totalDamageDealtToMonsters = ${GameStatistics.totalDamageDealtToMonsters}`);
        console.log(`\n\t totalDamageTakenFromMonsters = ${GameStatistics.totalDamageTakenFromMonsters}`);

        console.log("\n\n\t Do you wanna play again?");
        console.log("\t Enter [1] --> YES");
        console.log("\t Enter [2] --> NO");
        const playAgain = Number(userInput("\t Play again: "));

        if (playAgain === 1) {
            continue;
        } else {
            break;
        }
    }

    console.log("\n\n\t Bye Bye. Come Back Later! :D\n\n");
}
